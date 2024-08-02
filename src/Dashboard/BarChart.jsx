import { Bar } from "react-chartjs-2";
import "./defaultStyle.css";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Data",
        data: [500, 730, 410, 650, 350, 670, 500, 650, 550, 610, 380, 570],
        backgroundColor: "#F2F4F7",
        hoverBackgroundColor: "#3b82f6",
        borderRadius: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.9,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
            weight: "400",
          },
          color: "#344054",
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 800,
        ticks: {
          stepSize: 200,
          font: {
            size: 12,
            weight: "400",
          },
          color: "#344054",
        },
        border: {
          display: false,
        },
        grid: {
          display: true,
          color: "#F2F4F7",
        },
      },
    },
  };

  return <Bar data={data} options={options} width={800} height={300} />;
};

export default BarChart;
