'use client'
import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts3D from 'highcharts/highcharts-3d';

if (typeof Highcharts === 'object') {
  Highcharts3D(Highcharts);  
}

export default function ThreeDDonutChart() {
  const [options, setOptions] = useState({
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
      },
      backgroundColor: '#f9f9f9',
    },
    title: {
      text: 'Technology Resources',
    },
    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 45,
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.percentage:.1f}%',
        },
      },
    },
    series: [
      {
        name: 'Share',
        data: [
          { name: 'UX/UI Developers', y: 10, color: '#FFA500' },
          { name: 'POS & Desktop App Developer', y: 10, color: '#FFD700' },
          { name: 'PM - QA - BA', y: 5, color: '#ADFF2F' },
          { name: 'Sales & Marketing', y: 5, color: '#32CD32' },
          { name: 'HR & Operations', y: 8, color: '#1E90FF' },
          { name: 'PHP Developer', y: 12, color: '#4B0082' },
          { name: 'Native & Hybrid Mobile App Developer', y: 10, color: '#800080' },
          { name: '.NET Developer', y: 15, color: '#8A2BE2' },
          { name: 'MEAN/MERN/MEVN Developer', y: 25, color: '#FF6347' },
        ],
      },
    ],
  });

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
