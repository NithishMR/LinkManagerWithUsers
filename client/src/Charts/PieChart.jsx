import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ user }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
      },
    ],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/links-by-category/${user.sno}` // Fetching data for the specific user
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);

        const categories = data.map((item) => item.category);
        const counts = data.map((item) => item.count);

        // Set chart data
        setChartData({
          labels: categories,
          datasets: [
            {
              data: counts,
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
              ],
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user.sno]); // Dependency array includes user.sno to refetch when it changes

  if (loading) return <p>Loading...</p>; // Show loading text while fetching data

  return (
    <div>
      <div className="text-6xl text-center pb-10">Category Distribution</div>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
