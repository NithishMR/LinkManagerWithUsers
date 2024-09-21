import { useState } from "react";
import CategorySelect from "./CategorySelect"; // Assuming you have a CategorySelect component for selecting categories

function SearchCategory() {
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState(null); // To display error messages

  // Handlers for input changes
  const handleLinkChange = (e) => setLink(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);

  // Handler for form submission
  const handleSubmit = async () => {
    // Basic validation to ensure all fields are filled
    if (!link || !category || !description || !title) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ link, category, description, title }),
      });

      if (!response.ok) {
        throw new Error("Failed to save link");
      }

      // Optionally clear the form and reset error message
      setLink("");
      setCategory("");
      setDescription("");
      setTitle("");
      setErrorMessage(null);

      console.log("Link added successfully!");
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while saving the link.");
    }
  };

  return (
    <div className="m-auto pt-6">
      <div className="flex flex-row justify-around items-center mb-4">
        <input
          type="text"
          placeholder="Enter your link"
          value={link}
          onChange={handleLinkChange}
          className="input input-bordered w-[250px]"
        />
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={handleTitleChange}
          className="input input-bordered w-[250px]"
        />
        <CategorySelect onChange={handleCategoryChange} value={category} />
        <button className="btn btn-wide" onClick={handleSubmit}>
          Add Link
        </button>
      </div>
      <div className="pl-4 m-auto">
        <textarea
          className="textarea textarea-bordered w-[90%] h-[400px]"
          placeholder="Enter description"
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
      </div>
      {errorMessage && (
        <div className="text-red-500 mt-4 text-center">{errorMessage}</div>
      )}
    </div>
  );
}

export default SearchCategory;
