import React, { useState, useEffect } from "react";
import "./Piecharts.css";
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

const Piecharts = ({ data }) => {
  const [chartDimensions, setChartDimensions] = useState({ width: 600, height: 400 });
  const [outerRadius, setOuterRadius] = useState(120); // Initial outerRadius

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      let newWidth = 600;
      let newHeight = 400;

      // Example: Adjust dimensions based on screen width
      if (windowWidth < 450) {
        newWidth = 200;
        newHeight = 300;}
      else if (windowWidth < 450) {
        newWidth = 300;
        newHeight = 300;}
      else if (windowWidth < 768) {
        newWidth = 400;
        newHeight = 300;
      } else if (windowWidth < 1024) {
        newWidth = 500;
        newHeight = 350;
      }

      // Adjust outerRadius based on the smaller dimension
      const smallerDimension = Math.min(newWidth, newHeight);
      setOuterRadius(smallerDimension / 4); // Example: Set outerRadius as 1/4th of smaller dimension
      setChartDimensions({ width: newWidth, height: newHeight });
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const colorData = data.map(entry => {
    let color;
    if (entry.value < 25) {
      color = 'red';
    } else if (entry.value >= 25 && entry.value < 50) {
      color = 'yellow';
    } else if (entry.value >= 50 && entry.value < 75) {
      color = 'blue';
    } else {
      color = 'green';
    }
    return { ...entry, color };
  });

  return (
    <div className="Piecharts-container">
      <div className="Piecharts-sub-container">
        <PieChart width={chartDimensions.width} height={chartDimensions.height}>
          <Pie
            dataKey="value"
            data={colorData}
            cx="50%"
            cy="50%"
            outerRadius={outerRadius}
            fill="#8884d8"
            label
          >
            {colorData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Piecharts;
