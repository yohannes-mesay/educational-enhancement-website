import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ given }) => {
  const data = {
    labels: ["Wrong", "Correct"],
    datasets: [
      {
        label: "out of 10",
        data: [10 - given.count, given.count],
        backgroundColor: ["#FF6384", "#36A2EB"],
        borderColor: ["red", "blue"],
      },
    ],
  };

  const options = {};

  return (
    <div className="w-1/4 h-1/4">
      <Doughnut data={data} options={options} />
      <div className="flex justify-center gap-2 w-full">
        <span className="text-2xl font-bold text-center">{given.subject}</span>
        <span className="text-2xl font-bold text-center">{given.year}</span>
      </div>
    </div>
  );
};

export default Chart;
