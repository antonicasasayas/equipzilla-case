import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TweetsChart = ({chartData}) => {
    console.log(chartData);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Tweets Data",
      },
    },
  };
const labels = ['1','2','3','4','5','6','7','8','9','10'];


  
  const data = {
   labels,
      datasets: [
        
      {
        label: "Number of retweets",
        data: chartData,
        backgroundColor: "rgba(255, 99, 132,1)",
      },
    //   {
    //     label: "Dataset 2",
    //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //     backgroundColor: "rgba(53, 162, 235, 0.5)",
    //   },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default TweetsChart;
