import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";

function TableForManage({ searchQuery, selectedCategory, user }) {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/${user.sno}`);
        if (!response.ok) {
          console.error("Error fetching data");
          return;
        }
        const data = await response.json();
        setLinks(data);
        // console.log(links);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    getData();
  }, [user.sno]); // Added user.sno as a dependency

  const handleDelete = async (linkNumber) => {
    try {
      console.log(linkNumber);
      const response = await fetch(
        `http://localhost:5000/deleteLink/${user.sno}/${linkNumber}`, // Send both user ID and link number
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // If delete was successful, update the state
        toast.success("Link has been successfully deleted");
        setLinks((prevLinks) =>
          prevLinks.filter((link) => link.linknumber !== linkNumber)
        );
      } else {
        console.error("Failed to delete the link");
        toast.error("Failed to delete the link");
      }
    } catch (error) {
      console.error("Error: ", error);
      toast.error("An error occurred while deleting the link.");
    }
  };

  // Filter the links based on the search query and selected category
  const filteredLinks = links.filter((link) => {
    const matchesQuery = link.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory
      ? link.category === selectedCategory
      : true;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="overflow-x-auto">
      <Toaster richColors />
      <table className="table">
        <thead>
          <tr>
            <th>SNo</th>
            <th>Category</th>
            <th>Title</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredLinks.length > 0 ? (
            filteredLinks.map((link, index) => (
              <tr key={link.id}>
                <td>{link.linknumber}</td>
                <td>{link.category}</td>
                <td>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.title}
                  </a>
                </td>
                <td>{new Date(link.created_at).toLocaleDateString()}</td>
                <td className="cursor-pointer">
                  <Toaster richColors />
                  <img
                    src="../images/delete.svg"
                    alt="deleteIcon"
                    onClick={() => handleDelete(link.linknumber)} // Pass linkNumber directly
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableForManage;
