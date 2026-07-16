/*
============================================================

ESP32 Smart Weather Station Dashboard
UI Module

============================================================
*/

import { STATUS } from "./config.js";

import {

    formatTemperature,

    formatHumidity,

    getCurrentTime,

    animateValue,

    updateDocumentTitle

} from "./utils.js";

/*
============================================================
DOM Elements
============================================================
*/

import { DOM } from "./dom.js";

/*
============================================================
Initialize Dashboard
============================================================
*/

export function initializeDashboard() {

    setOfflineState();

}

/*
============================================================
Update Dashboard
============================================================
*/

export function updateDashboard(sensorData) {

    updateTemperature(sensorData.temperature);

    updateHumidity(sensorData.humidity);

    updateStatus(

        sensorData.status,

        sensorData.description

    );

    updateFooter(sensorData);

    updateDocumentTitle(sensorData.status);

}

/*
============================================================
Temperature
============================================================
*/

function updateTemperature(value) {

    animateValue(

        DOM.temperature,

        value,

        " °C"

    );

    animateValue(

        DOM.currentTemp,

        value,

        " °C"

    );

}

/*
============================================================
Humidity
============================================================
*/

function updateHumidity(value) {

    animateValue(

        DOM.humidity,

        value,

        " %"

    );

    animateValue(

        DOM.currentHumidity,

        value,

        " %"

    );

}

/*
============================================================
Status
============================================================
*/

function updateStatus(

    status,

    description

) {

    DOM.statusBadge.className = "";

    switch(status){

        case STATUS.GOOD:

            DOM.statusBadge.classList.add("good");

            DOM.statusBadge.textContent =

                "GOOD";

            break;

        case STATUS.MODERATE:

            DOM.statusBadge.classList.add("moderate");

            DOM.statusBadge.textContent =

                "MODERATE";

            break;

        case STATUS.EXTREME:

            DOM.statusBadge.classList.add("extreme");

            DOM.statusBadge.textContent =

                "EXTREME";

            break;

        default:

            DOM.statusBadge.classList.add("offline");

            DOM.statusBadge.textContent =

                "OFFLINE";

    }

    DOM.statusDescription.textContent =

        description;

}

/*
============================================================
Footer
============================================================
*/

function updateFooter(sensorData){

    DOM.lastUpdated.textContent =

        getCurrentTime();

    DOM.ipAddress.textContent =

        sensorData.ip;

    DOM.wifiStatus.textContent =

        sensorData.status === STATUS.OFFLINE

        ? "Disconnected"

        : "Connected";

}

/*
============================================================
Offline State
============================================================
*/

export function setOfflineState(){

    updateStatus(

        STATUS.OFFLINE,

        "Waiting for ESP32..."

    );

    DOM.wifiStatus.textContent =

        "Disconnected";

    DOM.ipAddress.textContent =

        "---";

    DOM.lastUpdated.textContent =

        "--:--:--";

}

/*
============================================================
Online State
============================================================
*/

export function setOnlineState(){

    DOM.connectionBadge.innerHTML =

        `<i class="fa-solid fa-circle"></i>
         ESP32 Connected`;

}