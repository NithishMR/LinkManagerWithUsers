import { useState } from "react";
import { Toaster, toast } from "sonner";
function AddCat() {
  const [category, setCategory] = useState(""); // Ensure variable is category
  const [errorMessage, setErrorMessage] = useState(null); // For error messages

  // Handle input change
  const handleInputChange = (e) => {
    setCategory(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    if (!category) {
      setErrorMessage("Category name is required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/addCategory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ category }), // Send the correct key
      });

      if (!response.ok) {
        throw new Error("Failed to save category");
      }
      toast.success("Category has been successfully added");
      // Clear input and error message on successful submission
      setCategory("");
      setErrorMessage(null);
      console.log("Category added successfully!");
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while saving the category.");
    }
  };

  return (
    <div className="m-auto pt-6">
      <form onSubmit={handleSubmit} className="flex flex-row justify-around">
        <input
          type="text"
          placeholder="Type category name here"
          value={category}
          onChange={handleInputChange}
          className="input input-bordered w-[500px]"
        />
        <button type="submit" className="btn btn-wide">
          Add Category
        </button>
      </form>
      {errorMessage && (
        <div className="text-red-500 mt-4 text-center">{errorMessage}</div>
      )}
    </div>
  );
}

export default AddCat;
