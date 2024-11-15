"use client";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

export default function CareerProgressionChart() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const options = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      background: "#f0f4f7",
    },
    title: {
      text: "Career Progression",
      align: "center",
      style: {
        fontSize: "18px",
        color: "#333",
      },
    },
    xaxis: {
      categories: ["2018", "2019", "2020", "2021", "2022", "Present"],
      title: {
        text: "Year",
        style: {
          color: "#333",
        },
      },
    },
    yaxis: {
      title: {
        text: "Career Level",
        style: {
          color: "#333",
        },
      },
      min: 0,
      max: 6,
      tickAmount: 6,
      labels: {
        formatter: (val) => {
          const labels = [
            "Junior Dev",
            "Mid-Level Dev",
            "Senior Dev",
            "Lead Dev",
            "Tech Architect",
            "Tech Lead",
          ];
          return labels[val - 1] || "";
        },
      },
    },
    annotations: {
      yaxis: [
        {
          y: 4,
          strokeDashArray: 0,
        },
      ],
      points: [
        {
          x: "2018",
          y: 1,
          label: {
            text: "Started as a software development company",
            style: {
              background: "#FFA500",
              color: "#fff",
            },
          },
        },
        {
          x: "2019",
          y: 2,
          label: {
            text: "Purchase own office",
            style: {
              background: "#FFD700",
              color: "#000",
            },
          },
        },
        {
          x: "2020",
          y: 3,
          label: {
            text: "Entered in mobile application development domain",
            style: {
              background: "#76D7C4",
              color: "#000",
            },
          },
        },
        {
          x: "2021",
          y: 4,
          label: {
            text: "Business trip to KSA",
            style: {
              background: "#FFAB40",
              color: "#fff",
            },
          },
        },
        {
          x: "2022",
          y: 5,
          label: {
            text: "8+ Resources having average 4+ of experience in their field",
            style: {
              background: "#ADFF2F",
              color: "#000",
            },
          },
        },
        {
          x: "Present",
          y: 6,
          label: {
            text: "Serving 5+ Countries",
            style: {
              background: "#76D7C4",
              color: "#000",
            },
          },
        },
      ],
    },
    stroke: {
      curve: "smooth",
    },
    tooltip: {
      x: {
        format: "yyyy",
      },
      y: {
        formatter: (val) => `${val}`,
      },
    },
    markers: {
      size: 5,
      colors: ["#FF4560"],
    },
    colors: ["#00BFFF"],
    grid: {
      padding: {
        right: 20,
        left: 20,
      },
    },
  };

  const series = [
    {
      name: "Career Level",
      data: [1, 2, 3, 4, 5, 6],
    },
  ];

  return isMounted ? (
    <Chart options={options} series={series} type="line" height="400" />
  ) : null;
}
