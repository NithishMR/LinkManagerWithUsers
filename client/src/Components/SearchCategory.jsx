import { useState } from "react";
import CategorySelect from "./CategorySelect";
import { Toaster, toast } from "sonner";

function SearchCategory({ user }) {
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [sno, setSno] = useState(user.sno);
  const handleLinkChange = (e) => setLink(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleSubmit = async () => {
    if (!link || !category || !description || !title) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      await toast.promise(
        fetch("http://localhost:5000/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ link, category, description, title, sno }),
        }),
        {
          loading: "Saving your link...",
          success: "Link has been added successfully!",
          error: "Failed to save the link.",
        }
      );

      // Clear the form after success
      setLink("");
      setCategory("");
      setDescription("");
      setTitle("");
      setErrorMessage(null);
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while saving the link.");
    }
  };

  return (
    <div className="m-auto pt-6">
      <Toaster position="top-center" richColors />{" "}
      {/* Ensure this is included */}
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
