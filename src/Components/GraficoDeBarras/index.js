import { Chart, registerables } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

// Registra todos os componentes do Chart.js
Chart.register(...registerables);

const BarChart = ({ title, label, corBarra }) => {
    const data = {
        labels: ['Janeiro ', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
        datasets: [
            {
                label: label, // Certifique-se de que 'label' está definido
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: `${corBarra}`,
                borderWidth: 1,
                maxBarThickness: 30,
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
                text: title, // Certifique-se de que 'title' está definido
                font: {
                    size: 20,
                    weight: 'bold',
                },
                color: '#333',
                padding: {
                    top: 10,
                    bottom: 30,
                },
            },
        },
        maintainAspectRatio: false,
    };

    return <Bar data={data} options={options} />;
};

export default BarChart;
