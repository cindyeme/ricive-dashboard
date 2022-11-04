import React, { useRef, useEffect } from "react";

import {
  Chart,
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-moment";

// Import utilities
import { tailwindConfig, formatValue } from "../../utils/Utils";
import { FaArrowUp } from "react-icons/fa";

Chart.register(
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip
);

function LineChart02(props) {
  const { chartValue, chartDeviation, data, width, height } = props;

  const canvas = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        chartArea: {
          backgroundColor: tailwindConfig().theme.colors.green[50],
        },
        layout: {
          padding: 20,
        },
        scales: {
          y: {
            display: false,
            grid: {
              drawBorder: false,
              beginAtZero: false,
            },
            ticks: {
              maxTicksLimit: 5,
              callback: (value) => formatValue(value),
            },
          },
          x: {
            type: "time",
            time: {
              parser: "MM--DD-YYYY",
              unit: "month",
              displayFormats: {
                month: "MMM",
              },
            },
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              autoSkipPadding: 48,
              maxRotation: 0,
            },
            // display: true,
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              title: () => false, // Disable tooltip title
              label: (context) => formatValue(context.parsed.y),
            },
          },
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "nearest",
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
    });
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      <div className="px-5 py-3">
        <div className="flex items-center">
          <h2 className="h2 font-semibold text-black-600 mr-2 tabular-nums">
            ${chartValue}
          </h2>
          <div className="text-xs font-semibold text-primary-500 bg-light-200 py-1 px-1.5 rounded-[16px] flex items-center">
            <FaArrowUp size={10} />
            <span className="pl-1">{`${chartDeviation}%`}</span>
          </div>
        </div>
      </div>
      <div className="grow">
        <canvas ref={canvas} data={data} width={width} height={height}></canvas>
      </div>
    </React.Fragment>
  );
}

export default LineChart02;
