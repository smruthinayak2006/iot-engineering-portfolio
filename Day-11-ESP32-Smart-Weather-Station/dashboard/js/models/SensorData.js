/*
============================================================

IoT Dashboard Framework
Sensor Data Model

============================================================
*/

import { STATUS } from "../config.js";

export default class SensorData {

    constructor(rawData = {}) {

        this.temperature = this.parseNumber(

            rawData.temperature

        );

        this.humidity = this.parseNumber(

            rawData.humidity

        );

        this.status =

            rawData.status ||

            STATUS.OFFLINE;

        this.description =

            rawData.description ||

            "No sensor description available.";

        this.ip =

            rawData.ip ||

            "--";

        this.timestamp =

            rawData.timestamp ||

            new Date().toLocaleTimeString();

    }

    parseNumber(value) {

        const parsed = Number(value);

        return Number.isFinite(parsed)

            ? parsed

            : 0;

    }

    isOnline() {

        return this.status !== STATUS.OFFLINE;

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