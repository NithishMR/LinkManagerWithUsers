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

app.get("/getCategory", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT DISTINCT category AS name FROM category"
    );
    console.log("Query Result:", result.rows); // Log the result for verification
    return res.json(result.rows);
  } catch (err) {
    console.error("Error occurred:", err); // Log any errors
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
app.get("/getCountOfLinks/:userId", async (req, res) => {
  const userId = req.params.userId; // Get userId from request parameters
  try {
    const result = await pool.query(
      "SELECT COUNT(*) as count FROM links WHERE user_id = $1",
      [userId]
    );
    return res.json({ count: result.rows[0].count }); // Return the count as an object
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/links-by-category/:userId", async (req, res) => {
  const userId = req.params.userId; // Extracting userId from the request parameters
  try {
    const result = await pool.query(
      "SELECT category, COUNT(*) AS count FROM links WHERE user_id = $1 GROUP BY category", // Added space before GROUP BY
      [userId]
    );
    return res.json(result.rows);
  } catch (error) {
    console.error("Database Error:", error); // Added context to the error log
    res.status(500).json({ error: "Server error" });
  }
});

// API route to get all links data
app.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  console.log("Received User ID:", userId); // Log the user ID to verify

  try {
    const result = await pool.query(
      "SELECT id, category, url, created_at, title,linknumber FROM links WHERE user_id = $1",
      [userId]
    );
    console.log("Database Query Result:", result.rows); // Log the fetched rows
    return res.json(result.rows); // Send the response
  } catch (err) {
    console.error("Database Error:", err);
    res.status(500).send("Server Error");
  }
});

// for the signup page, this is prototyping
app.post("/signup", async (req, res) => {
  const { username, emailid, password } = req.body;

  if (!emailid || !username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Insert user data into the 'users' table
    const result = await pool.query(
      "INSERT INTO users (usrname, emailid, password) VALUES ($1, $2, $3) RETURNING sno", // Use 'sno' here
      [username, emailid, password]
    );

    return res.status(201).json({
      message: "User registered successfully",
      userId: result.rows[0].sno, // Use 'sno' instead of 'id'
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});
// sign in part, also a try

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userQuery = await pool.query(
      "SELECT * FROM users WHERE emailid = $1",
      [email]
    );

    if (userQuery.rows.length > 0) {
      const user = userQuery.rows[0];

      // Replace this line with password hashing comparison in production
      if (user.password === password) {
        const { sno, usrname, emailid } = user; // Destructure user for specific fields
        return res.status(200).json({
          message: "User signed in successfully",
          user: { sno, usrname, emailid },
        });
      } else {
        return res.status(401).json({ message: "Invalid password" });
      }
    } else {
      return res.status(404).json({ message: "User does not exist" });
    }
  } catch (error) {
    console.error("Error signing in:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

// API route to get unique categories

// API route to add a new link
app.post("/add", async (req, res) => {
  const { link, category, description, title, sno, linkNumber } = req.body; // Destructure incoming request body

  // Check if all required fields are provided
  if (!link || !category || !description || !title) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Insert new link into the 'links' table
    const result = await pool.query(
      "INSERT INTO links (url, category, description, title,user_id,linknumber) VALUES ($1, $2, $3, $4,$5,$6)",
      [link, category, description, title, sno, linkNumber]
    );
    return res.status(201).json({ message: "Link added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
app.post("/addCategory", async (req, res) => {
  const { category } = req.body; // Change 'name' to 'category'

  if (!category) {
    return res.status(400).json({ message: "Category name is required" });
  }

  try {
    console.log("Inserting category:", category); // Log for debugging
    const result = await pool.query(
      "INSERT INTO category (category) VALUES ($1)", // Ensure table name matches
      [category]
    );
    console.log("Insert result:", result); // Log the result of the insert
    return res.status(201).json({ message: "Category added successfully" });
  } catch (err) {
    console.error("Database error:", err); // Log the error for debugging
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

app.delete("/deleteLink/:sno/:linkNumber", async (req, res) => {
  const userId = req.params.sno; // Extract user_id
  const linkNumber = req.params.linkNumber; // Extract linknumber

  try {
    const result = await pool.query(
      "DELETE FROM links WHERE user_id = $1 AND linknumber = $2",
      [userId, linkNumber]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Link not found" });
    }

    res.status(200).json({ message: "Link deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`The server is running `);
});
