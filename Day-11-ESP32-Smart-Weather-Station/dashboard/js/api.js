/*
============================================================

ESP32 Smart Weather Station Dashboard
API Module

============================================================
*/

import { CONFIG } from "./config.js";
import SensorData from "./models/SensorData.js";

/*
============================================================
Fetch Sensor Data
============================================================
*/

export async function fetchSensorData() {

    try {

        const response = await fetch(CONFIG.API_URL, {
            method: "GET",
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        return new SensorData({

            temperature: data.temperature,

            humidity: data.humidity,

            status: data.status,

            description: data.description,

            ip: data.ip,

            timestamp: data.timestamp,

            online: data.online,

            simulated: data.simulated

        });

    }

    catch (error) {

        console.error("API Error:", error);

        return new SensorData();

    }

}

/*
============================================================
Start Polling
============================================================
*/

export function startDataPolling(callback) {

    async function update() {

        const sensorData = await fetchSensorData();

        callback(sensorData);

    }

    update();

    return setInterval(update, CONFIG.REFRESH_INTERVAL);

}

/*
============================================================
Stop Polling
============================================================
*/

export function stopDataPolling(intervalId) {

    clearInterval(intervalId);

}