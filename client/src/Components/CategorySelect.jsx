import { useEffect, useState } from "react";

function CategorySelect({ onChange }) {
  const [items, setItems] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:5000/getCategory");
        if (!response.ok) {
          console.error("Error fetching data");
          return;
        }
        const data = await response.json();
        setItems(data); // Set the items from the fetched data
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="">
      <select
        id="category-select"
        className="select select-bordered w-full max-w-xs"
        onChange={onChange} // Call onChange when the selection changes
      >
        <option value="">Select a category</option> {/* Default option */}
        {items.length > 0 ? (
          items.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name} {/* Use the `name` field returned by the server */}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No items available
          </option> // Fallback for no items
        )}
      </select>
    </div>
  );
}

export default CategorySelect;
