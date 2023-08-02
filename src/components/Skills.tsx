import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

import { Bar } from "react-chartjs-2";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const Skills = () => {
  const data = {
    labels: [
      "Javascript",
      "React",
      "Git",
      "Photoshop & Illustrator",
      "Problem Solving",
      "TypeScript",
    ],
    font: {
      size: 50,
    },
    datasets: [
      {
        label: "",
        data: [80, 70, 50, 90, 85, 50],
        borderColor: "#BBBBBB",
        borderRadius: 3,
        backgroundColor: [
          "rgba(95, 178, 168, 0.9)",
          "rgba(225, 174, 158, 0.9)",
          "rgba(223, 174, 54, 0.9)",
          "rgba(188, 142, 91, 0.9)",
          "rgba(202, 69, 68, 0.9)",
          " rgba(111, 125, 147, 0.9)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },

    animations: {
      y: {
        from: 1000,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,

        ticks: {
          callback: function (value: string | number): string | number {
            // Define your custom labels based on the values
            const labels: string[] = ["Newbie", "Geek", "Ninja", "Jedi"];
            // Check if the value exists as an index in the labels array
            let label = "";
            if (typeof value === "number" && value % 20 === 0) {
              if (value <= 30) {
                label = "";
              } else if (value <= 50) {
                label = "Newbie";
              } else if (value <= 70) {
                label = "Geek";
              } else if (value <= 85) {
                label = "Ninja";
              } else {
                label = "Jedi";
              }
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="skills-container" data-aos="fade-right">
      <h2 className="skills-header">My skills</h2>

      <Bar className="bar" data={data} options={options}></Bar>
    </div>
  );
};
