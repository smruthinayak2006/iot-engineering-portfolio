/*
============================================================

ESP32 Smart Weather Station Dashboard

Application Entry Point

============================================================
*/

import {

    initializeDashboard,

    updateDashboard

} from "./ui.js";

import {

    initializeCharts,

    updateCharts

} from "./charts.js";

import {

    startDataPolling

} from "./api.js";

function startApplication(){

    console.clear();

    console.log("ESP32 Dashboard Started");

    initializeDashboard();

    initializeCharts();

    startDataPolling((sensorData)=>{

        updateDashboard(sensorData);

        updateCharts(sensorData);

    });

}

document.addEventListener(

    "DOMContentLoaded",

    startApplication

);