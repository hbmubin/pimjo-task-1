import { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const AreaChart = () => {
  const chartRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

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
        label: "line 1",
        data: [
          700, 710, 720, 705, 690, 700, 720, 720, 730, 740, 720, 720, 740, 760,
          760, 780, 780, 785, 790, 810, 820, 810, 820, 810, 790, 795, 800, 805,
          810, 820, 830, 835, 840, 840, 840, 850, 860, 865, 870, 880, 875, 870,
          870, 865, 870, 860, 850, 860, 870, 860, 900,
        ],
        borderColor: "#465FFF",
        borderWidth: 2,
        fill: true,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
      {
        label: "line 2",
        data: [
          450, 460, 470, 460, 470, 460, 450, 460, 455, 480, 490, 500, 490, 515,
          520, 525, 535, 530, 545, 560, 550, 560, 570, 560, 575, 590, 570, 590,
          580, 570, 570, 575, 585, 580, 570, 575, 590, 595, 585, 570, 570, 580,
          580, 585, 570, 570, 600, 640, 610, 600, 640,
        ],
        borderColor: "#9CB9FF",
        borderWidth: 2,
        fill: true,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      x: {
        type: "category",
        labels: [
          "",
          "Jan",
          "Jan",
          "Jan",
          "Jan",
          "Feb",
          "Feb",
          "Feb",
          "Feb",
          "Mar",
          "Mar",
          "Mar",
          "Mar",
          "Apr",
          "Apr",
          "Apr",
          "Apr",
          "May",
          "May",
          "May",
          "May",
          "Jun",
          "Jun",
          "Jun",
          "Jun",
          "Jul",
          "Jul",
          "Jul",
          "Jul",
          "Aug",
          "Aug",
          "Aug",
          "Aug",
          "Sep",
          "Sep",
          "Sep",
          "Sep",
          "Oct",
          "Oct",
          "Oct",
          "Oct",
          "Nov",
          "Nov",
          "Nov",
          "Nov",
          "Dec",
          "Dec",
          "Dec",
          "Dec",
          "Dec",
          "",
        ],
        ticks: {
          font: {
            size: 12,
            weight: "400",
          },
          color: "#344054",
          autoSkip: true,
          maxTicksLimit: 14,
          padding: 0,
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
        max: 1000,
        ticks: {
          stepSize: 200,
          font: {
            size: 12,
            weight: "400",
          },
          color: "#344054",
          padding: 0,
        },
        grid: {
          display: true,
          color: "#F2F4F7",
        },
        border: {
          display: false,
        },
      },
    },
  };

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.ctx;

      const gradient1 = ctx.createLinearGradient(0, 0, 0, chart.height);
      gradient1.addColorStop(0, "rgba(30, 144, 255, .1)");
      gradient1.addColorStop(1, "rgba(0, 0, 0, 0.0)");

      const gradient2 = ctx.createLinearGradient(0, 0, 0, chart.height);
      gradient2.addColorStop(0, "rgba(30, 144, 255, 0.05)");
      gradient2.addColorStop(1, "rgba(0, 0, 0, 0)");

      const updatedData = {
        ...data,
        datasets: data.datasets.map((dataset, index) => ({
          ...dataset,
          backgroundColor: index === 0 ? gradient1 : gradient2,
        })),
      };

      chart.data = updatedData;
      chart.update();
    }
  }, [data]);

  return (
    <div className="areaChart xl:w-auto xl:h-auto w-full">
      <Line
        ref={chartRef}
        data={data}
        options={options}
        height={isMobile ? undefined : 72}
      />
    </div>
  );
};

export default AreaChart;
