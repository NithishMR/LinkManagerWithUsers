import { useEffect, useState } from "react";

function Table({ searchQuery, selectedCategory }) {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:5000/");
        if (!response.ok) {
          console.error("Error fetching data");
          return;
        }
        const data = await response.json();
        setLinks(data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    getData();
  }, []);

  // Filter links based on search query and selected category
  const filteredLinks = links.filter((link) => {
    const matchesQuery = link.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory
      ? link.category === selectedCategory
      : true; // Only filter by category if one is selected
    return matchesQuery && matchesCategory;
  });

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>SNo</th>
              <th>Category</th>
              <th>Title</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {filteredLinks.length > 0 ? (
              filteredLinks.map((link, index) => (
                <tr key={link.id}>
                  <td>{index + 1}</td>
                  <td>{link.category}</td>
                  <td>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.title}
                    </a>
                  </td>
                  <td>{new Date(link.created_at).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
