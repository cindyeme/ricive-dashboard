import React from "react";
import LineChart from "../shared/charts/LineChart01";

// Import utilities
import { tailwindConfig, hexToRGB } from "../utils/Utils";
import CardLayout from "./CardLayout";

function DashboardCard03() {
  const chartData = {
    labels: [
      "12-01-2020",
      "01-01-2021",
      "02-01-2021",
      "03-01-2021",
      "04-01-2021",
      "05-01-2021",
      "06-01-2021",
      "07-01-2021",
      "08-01-2021",
      "09-01-2021",
      "10-01-2021",
      "11-01-2021",
      "12-01-2021",
      "01-01-2022",
      "02-01-2022",
      "03-01-2022",
      "04-01-2022",
      "05-01-2022",
      "06-01-2022",
      "07-01-2022",
      "08-01-2022",
      "09-01-2022",
      "10-01-2022",
      "11-01-2022",
      "12-01-2022",
      "01-01-2023",
    ],
    datasets: [
      // green line
      {
        data: [50, 100, 200, 300, 350, 370, 400, 350, 300, 400, 600, 800, 850],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.green[500]
        )}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.green[500],
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.green[500],
        clip: 20,
      },
    ],
  };

  return (
    <CardLayout title="Session duration" value="3m 52s" percentage={2}>
      <LineChart data={chartData} width="100%" height={128} />
    </CardLayout>
  );
}

export default DashboardCard03;
