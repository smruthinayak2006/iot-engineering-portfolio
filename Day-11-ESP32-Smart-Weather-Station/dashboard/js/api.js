/*
============================================================

ESP32 Smart Weather Station Dashboard
API Module

============================================================
*/

import { CONFIG, STATUS } from "./config.js";
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

            temperature: Number(data.temperature),

            humidity: Number(data.humidity),

            status: data.status,

            description: data.description,

            timestamp: new Date().toLocaleTimeString(),

            online: true

        });

    }

    catch (error) {

        console.error("ESP32 Connection Error:", error);

        return new SensorData({

            temperature: null,

            humidity: null,

            status: STATUS.OFFLINE,

            description: "Unable to reach ESP32.",

            timestamp: new Date().toLocaleTimeString(),

            online: false

        });

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

    return setInterval(

        update,

        CONFIG.REFRESH_INTERVAL

    );

}

/*
============================================================
Stop Polling
============================================================
*/

export function stopDataPolling(intervalId) {

    clearInterval(intervalId);

}