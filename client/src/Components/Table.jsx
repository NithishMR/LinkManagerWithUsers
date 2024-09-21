import { useEffect, useState } from "react";

function Table() {
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
        console.log(data);
        setLinks(data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="">
      <div className="">
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
              {links.length > 0 ? (
                links.map((link, index) => (
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
    </div>
  );
}

export default Table;
