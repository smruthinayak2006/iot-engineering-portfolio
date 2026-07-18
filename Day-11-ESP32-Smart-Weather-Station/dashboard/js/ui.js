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

function updateTemperature(sensorData){

    if(sensorData.temperature === null){

        DOM.temperature.textContent="-- °C";

        DOM.currentTemp.textContent="-- °C";

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

function updateHumidity(sensorData){

    if(sensorData.humidity === null){

        DOM.humidity.textContent="-- %";

        DOM.currentHumidity.textContent="-- %";

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

function updateStatus(sensorData){

    DOM.statusBadge.className="";

    switch(sensorData.status){

        case STATUS.GOOD:

            DOM.statusBadge.classList.add("good");

            DOM.statusBadge.textContent="GOOD";

            break;

        case STATUS.MODERATE:

            DOM.statusBadge.classList.add("moderate");

            DOM.statusBadge.textContent="MODERATE";

            break;

        case STATUS.EXTREME:

            DOM.statusBadge.classList.add("extreme");

            DOM.statusBadge.textContent="EXTREME";

            break;

        default:

            DOM.statusBadge.classList.add("offline");

            DOM.statusBadge.textContent="OFFLINE";

    }

    DOM.statusDescription.textContent=

        sensorData.description;

}

/*
============================================================
Connection Badge
============================================================
*/

function updateConnection(sensorData){

    if(sensorData.isOnline()){

        DOM.connectionBadge.classList.remove("disconnected");

        DOM.connectionBadge.classList.add("connected");

        DOM.connectionBadge.innerHTML=

            `<i class="fa-solid fa-circle"></i>
             ESP32 Connected`;

    }

    else{

        DOM.connectionBadge.classList.remove("connected");

        DOM.connectionBadge.classList.add("disconnected");

        DOM.connectionBadge.innerHTML=

            `<i class="fa-solid fa-circle"></i>
             ESP32 Offline`;

    }

}

/*
============================================================
Footer
============================================================
*/

function updateFooter(sensorData){

    DOM.lastUpdated.textContent=

        getCurrentTime();

    DOM.ipAddress.textContent=

        sensorData.ip;

    DOM.wifiStatus.textContent=

        sensorData.isOnline()

        ? "Connected"

        : "Disconnected";

}

/*
============================================================
Offline State
============================================================
*/

export function setOfflineState(){

    DOM.temperature.textContent="-- °C";

    DOM.currentTemp.textContent="-- °C";

    DOM.humidity.textContent="-- %";

    DOM.currentHumidity.textContent="-- %";

    DOM.wifiStatus.textContent="Disconnected";

    DOM.ipAddress.textContent="--";

    DOM.lastUpdated.textContent="--:--:--";

    updateConnection({

        isOnline:()=>false

    });

    updateStatus({

        status:STATUS.OFFLINE,

        description:"Waiting for ESP32..."

    });

}