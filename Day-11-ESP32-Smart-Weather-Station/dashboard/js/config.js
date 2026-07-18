/*
============================================================

ESP32 Smart Weather Station Dashboard
Configuration

============================================================
*/

/*
============================================================
API
============================================================
*/

export const CONFIG = {

    API_URL: "http://127.0.0.1:5000/api/data",

    REFRESH_INTERVAL: 3000,

    MAX_DATA_POINTS: 20

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

    primary: "#3B82F6",

    secondaryText: "#94A3B8"

};

/*
============================================================
Chart Settings
============================================================
*/

export const CHART = {

    maxSamples: CONFIG.MAX_DATA_POINTS,

    tension: 0.35,

    borderWidth: 3,

    pointRadius: 2,

    pointHoverRadius: 5,

    animationDuration: 500

};

/*
============================================================
Animations
============================================================
*/

export const ANIMATION = {

    valueDuration: 500

};