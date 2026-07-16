/*
============================================================

ESP32 Smart Weather Station Dashboard
Configuration

============================================================
*/

/*
============================================================
API Configuration
============================================================
*/

export const API = {

    // For Local Testing
    endpoint: "data/data.json",

    // ESP32 Example
    // endpoint: "http://10.10.0.2/data",

    refreshInterval: 3000

};


/*
============================================================
Chart Configuration
============================================================
*/

export const CHART = {

    maxSamples: 20,

    animationDuration: 800,

    tension: 0.4,

    borderWidth: 3,

    pointRadius: 0,

    pointHoverRadius: 5

};


/*
============================================================
Dashboard Information
============================================================
*/

export const DASHBOARD = {

    title: "ESP32 Smart Weather Station",

    subtitle: "Environmental Monitoring Dashboard",

    version: "2.0.0"

};


/*
============================================================
Sensor Thresholds
============================================================
*/

export const THRESHOLDS = {

    temperature: {

        good: 30,

        warning: 40

    },

    humidity: {

        good: 70,

        warning: 85

    }

};


/*
============================================================
Status
============================================================
*/

export const STATUS = {

    GOOD: "GOOD",

    MODERATE: "MODERATE",

    EXTREME: "EXTREME",

    OFFLINE: "OFFLINE"

};


/*
============================================================
Colors
============================================================
*/

export const COLORS = {

    temperature: "#F97316",

    humidity: "#38BDF8",

    success: "#22C55E",

    warning: "#FACC15",

    danger: "#EF4444",

    text: "#F8FAFC",

    secondaryText: "#94A3B8",

    background: "#0B1120",

    surface: "#182235"

};


/*
============================================================
Animations
============================================================
*/

export const ANIMATION = {

    valueDuration: 500,

    fadeDuration: 300

};


/*
============================================================
Chart Labels
============================================================
*/

export const LABELS = {

    temperature: "Temperature",

    humidity: "Humidity"

};