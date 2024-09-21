import { useEffect, useState } from "react";

function TableForCategory() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:5000/addCategory");
        if (!response.ok) {
          console.error("Error fetching data");
          return;
        }
        const data = await response.json();
        console.log(data);
        setCategory(data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    getData();
  }, []);

  const handleDelete = async (sno) => {
    try {
      const response = await fetch(`http://localhost:5000/category/${sno}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // If delete was successful, update the category state
        setCategory((prevCategory) =>
          prevCategory.filter((item) => item.sno !== sno)
        );
        console.log("Category deleted successfully");
      } else {
        console.error("Failed to delete category");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div className="">
      <div className="">
        <div className="overflow-x-auto ">
          <table className="table">
            <thead>
              <tr>
                <th>SNo</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {category.length > 0 ? (
                category.map((item, index) => (
                  <tr key={item.sno}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td> {/* Change to item.category */}
                    <td className="cursor-pointer">
                      <img
                        src="../images/delete.svg"
                        alt="delete"
                        onClick={() => handleDelete(item.sno)} // Correctly pass sno
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableForCategory;
