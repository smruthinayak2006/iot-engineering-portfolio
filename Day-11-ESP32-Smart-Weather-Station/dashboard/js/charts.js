/*
============================================================

ESP32 Smart Weather Station Dashboard
Charts Module

============================================================
*/

import { CHART, COLORS } from "./config.js";
import { createGradient } from "./utils.js";

/*
============================================================
Private Variables
============================================================
*/

let temperatureChart = null;

let humidityChart = null;

const labels = [];

const temperatureHistory = [];

const humidityHistory = [];

/*
============================================================
Create Chart
============================================================
*/

function createChart(canvasId, label, color) {

    const canvas = document.getElementById(canvasId);

    if (!canvas) {

        console.error(`${canvasId} not found.`);

        return null;

    }

    const context = canvas.getContext("2d");

    return new Chart(context, {

        type: "line",

        data: {

            labels,

            datasets: [

                {

                    label,

                    data: [],

                    borderColor: color,

                    backgroundColor:
                        createGradient(context, color),

                    fill: true,

                    borderWidth:
                        CHART.borderWidth,

                    tension:
                        CHART.tension,

                    pointRadius:
                        CHART.pointRadius,

                    pointHoverRadius:
                        CHART.pointHoverRadius

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            animation: {

                duration:
                    CHART.animationDuration

            },

            interaction: {

                intersect: false,

                mode: "index"

            },

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                x: {

                    ticks: {

                        display: false

                    },

                    grid: {

                        color:
                            "rgba(255,255,255,.05)"

                    }

                },

                y: {

                    ticks: {

                        color:
                            COLORS.secondaryText

                    },

                    grid: {

                        color:
                            "rgba(255,255,255,.05)"

                    }

                }

            }

        }

    });

}

/*
============================================================
Initialize Charts
============================================================
*/

export function initializeCharts() {

    temperatureChart = createChart(

        "temperatureChart",

        "Temperature",

        COLORS.temperature

    );

    humidityChart = createChart(

        "humidityChart",

        "Humidity",

        COLORS.humidity

    );

}

/*
============================================================
Update Charts
============================================================
*/

export function updateCharts(sensorData) {

    labels.push("");

    temperatureHistory.push(

        sensorData.temperature

    );

    humidityHistory.push(

        sensorData.humidity

    );

    if (labels.length > CHART.maxSamples) {

        labels.shift();

        temperatureHistory.shift();

        humidityHistory.shift();

    }

    temperatureChart.data.datasets[0].data =
        temperatureHistory;

    humidityChart.data.datasets[0].data =
        humidityHistory;

    temperatureChart.update();

    humidityChart.update();

}

/*
============================================================
Clear Charts
============================================================
*/

export function resetCharts() {

    labels.length = 0;

    temperatureHistory.length = 0;

    humidityHistory.length = 0;

    temperatureChart.update();

    humidityChart.update();

}