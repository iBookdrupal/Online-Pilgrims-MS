import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Batch 1", "Batch 2", "Batch 3", "Batch 4", "Batch 5", "Batch 6"],
  datasets: [
    {
      label: "Travelled",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Couldnt Travel",
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: "rgb(54, 162, 235)",
    },
    {
      label: "Rejected",
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: "rgb(75, 192, 192)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const GroupedBar = () => (
  <>
    <div className="header">
      <h4 className="title">Grouped Bar Chart</h4>
    </div>
    <Bar data={data} options={options} />
  </>
);

export default GroupedBar;
