import React from "react";
import { DefaultButton } from "../../ui/buttons";

// Import utilities
import { tailwindConfig, hexToRGB } from "../../utils/Utils";
import LineChart02 from "../charts/LineChart02";

function DashboardCard04() {
  const data = [50, 200, 300, 391, 504, 349, 349, 504, 342, 504, 610, 732];

  const chartData = {
    labels: [
      "1-01-2020",
      "2-01-2021",
      "3-01-2021",
      "5-01-2021",
      "6-01-2021",
      "7-01-2021",
      "7-01-2021",
      "8-01-2021",
      "9-01-2021",
      "10-01-2021",
      "11-01-2021",
      "12-01-2022",
    ],
    datasets: [
      // green line
      {
        data: data,
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.green[500]
        )}, 0.01)`,
        borderColor: tailwindConfig().theme.colors.green[500],
        borderWidth: 2,
        tension: 0.2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.green[500],
        clip: 20,
      },
      // green line
      {
        data: [200, 300, 400, 500, 504, 504, 349, 349, 504, 342, 504, 610, 391],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.green[500]
        )}, 0.01)`,
        borderColor: tailwindConfig().theme.colors.green[800],
        borderWidth: 2,
        tension: 0.2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.green[800],
        clip: 20,
      },
      // green line
      {
        data: [400, 322, 426, 471, 365, 365, 238, 324, 288, 206, 324, 324],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.green[500]
        )}, 0.01)`,
        borderColor: tailwindConfig().theme.colors.green[300],
        borderWidth: 2,
        tension: 0.2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.green[300],
        clip: 20,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-12 bg-white shadow-custom-2 rounded-[8px]">
      <header className="px-5 pt-4 flex items-center justify-between">
        <h2 className="font-semibold text-slate-800">Total balance</h2>
        <DefaultButton text="View report" />
      </header>
      {/* Chart built with Chart.js 3 */}
      <LineChart02
        data={chartData}
        width={595}
        height={248}
        chartValue="107,843.82"
        chartDeviation={7.2}
      />
    </div>
  );
}

export default DashboardCard04;
