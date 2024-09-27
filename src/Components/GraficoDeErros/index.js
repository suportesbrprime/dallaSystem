import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrando os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WrongCharts = ({ title }) => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
    datasets: [
      {
        label: 'Produto Errado',
        data: [50, 70, 90, 60, 80, 70, 60, 90, 50],
        backgroundColor: 'rgba(54, 162, 235, 1)', // Azul
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Lote Errado',
        data: [30, 40, 80, 70, 60, 50, 40, 70, 40],
        backgroundColor: 'rgba(75, 192, 192, 1)', // Verde
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Erro de Leitura',
        data: [60, 50, 70, 90, 60, 80, 50, 60, 30],
        backgroundColor: 'rgba(255, 159, 64, 1)', // Laranja
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default WrongCharts;
