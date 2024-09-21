require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { Pool } = require("pg");

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware to handle CORS, request logging, and JSON parsing
app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); // Important for parsing incoming JSON requests

// PostgreSQL connection setup
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// API route to get all links data
app.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, category, url, created_at, title FROM links"
    );
    return res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// API route to get unique categories
app.get("/add", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT DISTINCT category AS name FROM category"
    );
    return res.json(result.rows); // Return an array of objects with a `name` field
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
app.get("/getCountOfLinks", async (req, res) => {
  try {
    const result = await pool.query("SELECT COUNT(*) as count FROM links");
    return res.json({ count: result.rows[0].count }); // Return the count as an object
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/addCategory", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT sno, category AS name FROM category"
    );
    return res.json(result.rows); // Return an array of objects with a `name` field
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
// API route to add a new link
app.post("/add", async (req, res) => {
  const { link, category, description, title } = req.body; // Destructure incoming request body

  // Check if all required fields are provided
  if (!link || !category || !description || !title) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Insert new link into the 'links' table
    const result = await pool.query(
      "INSERT INTO links (url, category, description, title) VALUES ($1, $2, $3, $4)",
      [link, category, description, title]
    );
    return res.status(201).json({ message: "Link added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
app.delete("/category/:sno", async (req, res) => {
  // Ensure the parameter matches
  const categorySno = req.params.sno;

  try {
    const result = await pool.query("DELETE FROM category WHERE sno = $1", [
      categorySno,
    ]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}/`);
});
