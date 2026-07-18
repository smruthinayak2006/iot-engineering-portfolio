/*
============================================================

ESP32 Smart Weather Station Dashboard
Sensor Data Model

============================================================
*/

import { STATUS } from "../config.js";

export default class SensorData {

    constructor(rawData = {}) {

        this.temperature = this.parseValue(rawData.temperature);

        this.humidity = this.parseValue(rawData.humidity);

        this.status = rawData.status || STATUS.OFFLINE;

        this.description =
            rawData.description ||
            "Waiting for ESP32...";

        this.ip =
            rawData.ip ||
            "--";

        this.timestamp =
            rawData.timestamp ||
            new Date().toLocaleTimeString();

        this.online =
            rawData.online ??
            (this.status !== STATUS.OFFLINE);

    }

    parseValue(value) {

        if (value === null || value === undefined || value === "") {

            return null;

        }

        const parsed = Number(value);

        return Number.isFinite(parsed)

            ? parsed

            : null;

    }

    hasTemperature() {

        return this.temperature !== null;

    }

    hasHumidity() {

        return this.humidity !== null;

    }

    isOnline() {

        return this.online;

    }

    isGood() {

        return this.status === STATUS.GOOD;

    }

    isModerate() {

        return this.status === STATUS.MODERATE;

    }

    isExtreme() {

        return this.status === STATUS.EXTREME;

    }

}