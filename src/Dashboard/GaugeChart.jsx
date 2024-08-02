import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const drawRoundedArc = (ctx, arc, radius) => {
  ctx.beginPath();
  ctx.arc(arc.x, arc.y, radius, arc.startAngle, arc.endAngle);
  ctx.stroke();
};

const roundedCornersPlugin = {
  id: "roundedCorners",
  afterUpdate(chart) {
    const arcs = chart.getDatasetMeta(0).data;
    arcs.forEach((arc, index) => {
      if (index === 0) {
        arc.round = true;
      } else {
        arc.round = false;
      }
    });
  },
  afterDraw(chart) {
    const ctx = chart.ctx;
    const arcs = chart.getDatasetMeta(0).data;
    ctx.save();
    arcs.forEach((arc) => {
      if (arc.round) {
        const radius = arc.outerRadius;
        ctx.lineCap = "round";
        ctx.lineWidth = radius - arc.innerRadius;
        ctx.strokeStyle = arc.options.backgroundColor;
        drawRoundedArc(ctx, arc, radius - ctx.lineWidth / 2);
      }
    });
    ctx.restore();
  },
};

const GaugeChart = () => {
  const data = {
    datasets: [
      {
        data: [75.55, 24.45],
        backgroundColor: ["#4D5DFB", "#EAEAEA"],
        borderWidth: 0,
        circumference: 183,
        rotation: 270,
      },
    ],
  };

  const options = {
    cutout: "91%",
    plugins: {
      tooltip: { enabled: false },
      roundedCorners: {},
    },
    rotation: 270,
    circumference: 180,
    elements: {
      arc: {
        borderRadius: 30,
      },
    },
  };

  return (
    <div className="gaugeChart w-full mx-auto relative">
      <Doughnut
        data={data}
        options={options}
        plugins={[roundedCornersPlugin]}
      />
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="font-semibold text-[36px] text-black-1">75.55%</div>
        <div className="">
          <span className="text-sm font-medium bg-[#ECFDF3] text-[#027A48] py-1 inline-block  px-3 rounded-full mt-2">
            +10%
          </span>
        </div>
      </div>
    </div>
  );
};

export default GaugeChart;
