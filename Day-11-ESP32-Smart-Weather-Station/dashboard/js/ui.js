/*
============================================================

ESP32 Smart Weather Station Dashboard
UI Module

============================================================
*/

import { STATUS } from "./config.js";

import {

    getCurrentTime,

    animateValue,

    updateDocumentTitle

} from "./utils.js";

import { DOM } from "./dom.js";

/*
============================================================
Initialize
============================================================
*/

export function initializeDashboard() {

    setOfflineState();

}

/*
============================================================
Main Dashboard Update
============================================================
*/

export function updateDashboard(sensorData) {

    updateTemperature(sensorData);

    updateHumidity(sensorData);

    updateStatus(sensorData);

    updateConnection(sensorData);

    updateFooter(sensorData);

    updateDocumentTitle(sensorData.status);

}

/*
============================================================
Temperature
============================================================
*/

function updateTemperature(sensorData) {

    if (sensorData.temperature === null) {

        DOM.temperature.textContent = "-- °C";

        DOM.currentTemp.textContent = "-- °C";

        return;

    }

    animateValue(

        DOM.temperature,

        sensorData.temperature,

        " °C"

    );

    animateValue(

        DOM.currentTemp,

        sensorData.temperature,

        " °C"

    );

}

/*
============================================================
Humidity
============================================================
*/

function updateHumidity(sensorData) {

    if (sensorData.humidity === null) {

        DOM.humidity.textContent = "-- %";

        DOM.currentHumidity.textContent = "-- %";

        return;

    }

    animateValue(

        DOM.humidity,

        sensorData.humidity,

        " %"

    );

    animateValue(

        DOM.currentHumidity,

        sensorData.humidity,

        " %"

    );

}

/*
============================================================
Status
============================================================
*/

function updateStatus(sensorData) {

    DOM.statusBadge.className = "";

    switch (sensorData.status) {

        case STATUS.GOOD:

            DOM.statusBadge.classList.add("good");

            DOM.statusBadge.textContent = "GOOD";

            break;

        case STATUS.MODERATE:

            DOM.statusBadge.classList.add("moderate");

            DOM.statusBadge.textContent = "MODERATE";

            break;

        case STATUS.EXTREME:

            DOM.statusBadge.classList.add("extreme");

            DOM.statusBadge.textContent = "EXTREME";

            break;

        default:

            DOM.statusBadge.classList.add("offline");

            DOM.statusBadge.textContent = "OFFLINE";

    }

    DOM.statusDescription.textContent = sensorData.description;

}

/*
============================================================
Connection Badge
============================================================
*/

function updateConnection(sensorData) {

    DOM.connectionBadge.className = "";

    if (sensorData.simulated) {

        DOM.connectionBadge.classList.add("simulation");

        DOM.connectionBadge.innerHTML =

            `<i class="fa-solid fa-flask"></i> Simulation Mode`;

        return;

    }

    if (sensorData.isOnline()) {

        DOM.connectionBadge.classList.add("connected");

        DOM.connectionBadge.innerHTML =

            `<i class="fa-solid fa-circle"></i> ESP32 Connected`;

    }

    else {

        DOM.connectionBadge.classList.add("disconnected");

        DOM.connectionBadge.innerHTML =

            `<i class="fa-solid fa-circle"></i> ESP32 Offline`;

    }

}

/*
============================================================
Footer
============================================================
*/

function updateFooter(sensorData) {

    DOM.lastUpdated.textContent =
        getCurrentTime();

    DOM.ipAddress.textContent =
        sensorData.ip;

    if (sensorData.simulated) {

        DOM.wifiStatus.textContent =
            "Simulation";

        if (DOM.sensorStatus) {

            DOM.sensorStatus.textContent =
                "Simulation";

        }

        if (DOM.modeChip) {

            DOM.modeChip.innerHTML =

                `<i class="fa-solid fa-flask"></i> SIMULATION`;

        }

    }

    else {

        DOM.wifiStatus.textContent =

            sensorData.isOnline()

                ? "Connected"

                : "Disconnected";

        if (DOM.sensorStatus) {

            DOM.sensorStatus.textContent =

                sensorData.isOnline()

                    ? "DHT22 Online"

                    : "Disconnected";

        }

        if (DOM.modeChip) {

            DOM.modeChip.innerHTML =

                `<i class="fa-solid fa-circle-play"></i> LIVE`;

        }

    }

}

/*
============================================================
Offline State
============================================================
*/

export function setOfflineState() {

    DOM.temperature.textContent = "-- °C";

    DOM.currentTemp.textContent = "-- °C";

    DOM.humidity.textContent = "-- %";

    DOM.currentHumidity.textContent = "-- %";

    DOM.wifiStatus.textContent = "Disconnected";

    DOM.ipAddress.textContent = "--";

    DOM.lastUpdated.textContent = "--:--:--";

    if (DOM.sensorStatus) {

        DOM.sensorStatus.textContent = "Disconnected";

    }

    updateConnection({

        isOnline: () => false,

        simulated: false

    });

    updateStatus({

        status: STATUS.OFFLINE,

        description: "Waiting for ESP32..."

    });

}