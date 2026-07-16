/*
============================================================

ESP32 Smart Weather Station Dashboard
API Module

============================================================
*/

import { API, STATUS } from "./config.js";
import SensorData from "./models/SensorData.js";

/*
============================================================
Fetch Sensor Data
============================================================
*/

export async function fetchSensorData() {

    try {

        const response = await fetch(API.endpoint, {

            method: "GET",

            headers: {

                "Content-Type": "application/json"

            },

            cache: "no-store"

        });

        if (!response.ok) {

            throw new Error(
                `HTTP ${response.status}`
            );

        }

        const data = await response.json();

        return new SensorData(data);

    }

    catch (error) {

        console.error(
            "API Error:",
            error.message
        );

        return new SensorData({

            status: STATUS.OFFLINE,

            description:

                "Unable to communicate with ESP32."

        });

    }

}

/*
============================================================
Start Polling
============================================================
*/

export function startDataPolling(callback) {

    async function refresh() {

        const sensorData =

            await fetchSensorData();

        callback(sensorData);

    }

    refresh();

    return setInterval(

        refresh,

        API.refreshInterval

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