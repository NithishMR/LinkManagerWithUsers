import { useState } from "react";
import CategorySelect from "./CategorySelect";

function SearchForManagePage({ setSearchQuery, setSelectedCategory }) {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setSearchQuery(inputValue);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="m-auto pt-6">
      <div className="flex flex-row justify-around">
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-[500px]"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div>
          <button className="btn btn-wide" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div>
          <CategorySelect onChange={handleCategoryChange} />
        </div>
      </div>
    </div>
  );
}

export default SearchForManagePage;
