import { useEffect, useState } from "react";

function Card({ user }) {
  const [count, setCount] = useState(0); // Final count from the server
  const [displayCount, setDisplayCount] = useState(0); // Count displayed in the card

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/getCountOfLinks/${user.sno}`
        );
        if (!response.ok) {
          console.error("Error fetching data");
          return;
        }
        const data = await response.json();
        console.log(data);
        setCount(data.count); // Set the count from the fetched data
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if (count > 0) {
      let interval;
      let increment = Math.ceil(count / 10); // Adjust the increment based on the final count

      interval = setInterval(() => {
        setDisplayCount((prev) => {
          const nextCount = prev + increment;

          // Stop at the target count
          if (nextCount >= count) {
            clearInterval(interval);
            return count;
          }

          return nextCount; // Increment the displayed count
        });
      }, 100); // Update every 100ms

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [count]);

  return (
    <div className="py-20">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-6xl m-auto">NO OF LINKS ADDED</h2>
          <p className="text-9xl text-center">{displayCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
