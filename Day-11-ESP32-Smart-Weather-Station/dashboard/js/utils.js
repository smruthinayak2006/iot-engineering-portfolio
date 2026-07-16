/*
============================================================

ESP32 Smart Weather Station Dashboard

Utility Functions

============================================================
*/

import { COLORS, STATUS, ANIMATION } from "./config.js";

/*
============================================================
Temperature Formatting
============================================================
*/

export function formatTemperature(value) {

    return `${Number(value).toFixed(1)} °C`;

}

/*
============================================================
Humidity Formatting
============================================================
*/

export function formatHumidity(value) {

    return `${Number(value).toFixed(1)} %`;

}

/*
============================================================
Time Formatting
============================================================
*/

export function getCurrentTime() {

    return new Date().toLocaleTimeString();

}

/*
============================================================
Update Browser Title
============================================================
*/

export function updateDocumentTitle(status) {

    switch (status) {

        case STATUS.GOOD:

            document.title =
                "🟢 ESP32 Smart Weather Station";

            break;

        case STATUS.MODERATE:

            document.title =
                "🟡 ESP32 Smart Weather Station";

            break;

        case STATUS.EXTREME:

            document.title =
                "🔴 ESP32 Smart Weather Station";

            break;

        default:

            document.title =
                "⚫ ESP32 Smart Weather Station";

    }

}

/*
============================================================
Clamp Value
============================================================
*/

export function clamp(value, min, max) {

    return Math.min(Math.max(value, min), max);

}

/*
============================================================
Smooth Counter Animation
============================================================
*/

export function animateValue(
    element,
    target,
    suffix = ""
) {

    const start =
        Number(element.dataset.value || 0);

    const startTime =
        performance.now();

    function update(now) {

        const progress = Math.min(

            (now - startTime) /
            ANIMATION.valueDuration,

            1

        );

        const current =
            start +
            (target - start) * progress;

        element.textContent =
            current.toFixed(1) + suffix;

        if (progress < 1) {

            requestAnimationFrame(update);

        } else {

            element.dataset.value = target;

        }

    }

    requestAnimationFrame(update);

}

/*
============================================================
Chart Gradient
============================================================
*/

export function createGradient(
    context,
    color
) {

    const gradient =
        context.createLinearGradient(
            0,
            0,
            0,
            320
        );

    gradient.addColorStop(
        0,
        color + "55"
    );

    gradient.addColorStop(
        1,
        color + "00"
    );

    return gradient;

}

/*
============================================================
Status Class
============================================================
*/

export function getStatusClass(status) {

    switch (status) {

        case STATUS.GOOD:

            return "good";

        case STATUS.MODERATE:

            return "moderate";

        case STATUS.EXTREME:

            return "extreme";

        default:

            return "offline";

    }

}

/*
============================================================
Status Color
============================================================
*/

export function getStatusColor(status) {

    switch (status) {

        case STATUS.GOOD:

            return COLORS.success;

        case STATUS.MODERATE:

            return COLORS.warning;

        case STATUS.EXTREME:

            return COLORS.danger;

        default:

            return "#64748B";

    }

}

/*
============================================================
Current Status Icon
============================================================
*/

export function getStatusIcon(status) {

    switch (status) {

        case STATUS.GOOD:

            return "fa-circle-check";

        case STATUS.MODERATE:

            return "fa-triangle-exclamation";

        case STATUS.EXTREME:

            return "fa-circle-radiation";

        default:

            return "fa-circle-xmark";

    }

}

/*
============================================================
Debounce
============================================================
*/

export function debounce(
    callback,
    delay
) {

    let timer;

    return (...args) => {

        clearTimeout(timer);

        timer = setTimeout(() => {

            callback(...args);

        }, delay);

    };

}

/*
============================================================
Sleep Helper
============================================================
*/

export function sleep(milliseconds) {

    return new Promise(resolve => {

        setTimeout(resolve, milliseconds);

    });

}

/*
============================================================
Console Banner
============================================================
*/

export function showBanner() {

    console.clear();

    console.log(
`
==========================================
ESP32 Smart Weather Station Dashboard
Version 2.0.0
==========================================
`
    );

}