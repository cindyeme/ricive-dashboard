import React from "react";
import LineChart from "../charts/LineChart01";

// Import utilities
import { tailwindConfig, hexToRGB } from "../../utils/Utils";
import CardLayout from "../../layout/CardLayout";

function DashboardCard02() {
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
      // red line
      {
        data: [850, 800, 600, 400, 300, 350, 400, 370, 350, 300, 200, 100, 50],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.red[500]
        )}, 0.05)`,
        borderColor: tailwindConfig().theme.colors.red[500],
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.red[500],
        clip: 20,
      },
    ],
  };

  return (
    <CardLayout title="Sessions" value="26.4k" percentage={2} down>
      <LineChart data={chartData} width="100%" height={120} />
    </CardLayout>
  );
}

export default DashboardCard02;
