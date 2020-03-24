import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';

import data from '../data/covidSpread';

const getValues = valueData => {
  return Object.values(valueData);
};

const getLabels = labelData => {
  return Object.getOwnPropertyNames(labelData);
};

const chartConfig = {
  type: 'line',
  data: {
    labels: getLabels(data),
    datasets: [
      {
        label: '# of Confirmed Covid-19 Cases',
        data: getValues(data),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 3
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false
          }
        }
      ]
    }
  }
};

const Chart = () => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default Chart;
