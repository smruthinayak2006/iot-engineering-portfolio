# Smart Soil Moisture Monitor 🌱

## Overview

The Smart Soil Moisture Monitor is an Arduino Uno–based embedded system that continuously measures soil moisture using an analog moisture sensor (simulated with a potentiometer in Wokwi). Based on the measured moisture level, the system classifies the soil as **Wet**, **Moderate**, or **Dry**, providing visual feedback through LEDs, an audible alert using a piezo buzzer, and live readings on the Serial Monitor.

---

## Features

- Real-time soil moisture monitoring
- Three moisture status levels
- LED-based status indication
- Piezo buzzer alert for dry soil
- Live Serial Monitor output
- Beginner-friendly embedded system project

---

## Components Used

| Component | Quantity |
|----------|:--------:|
| Arduino Uno | 1 |
| Soil Moisture Sensor *(Potentiometer in Wokwi)* | 1 |
| Green LED | 1 |
| Yellow LED | 1 |
| Red LED | 1 |
| Piezo Buzzer | 1 |
| 220Ω Resistors | 3 |
| Jumper Wires | As Required |

---

## Pin Connections

| Component | Arduino Pin |
|----------|-------------|
| Soil Moisture Sensor | A0 |
| Green LED | D8 |
| Yellow LED | D9 |
| Red LED | D10 |
| Piezo Buzzer | D6 |

---

## Working Principle

The soil moisture sensor continuously measures the moisture content of the soil.

Arduino reads the analog sensor value and compares it with predefined threshold values to determine the current soil condition.

- **Wet Soil**
  - Green LED ON
  - Yellow LED OFF
  - Red LED OFF
  - Buzzer OFF

- **Moderate Soil**
  - Yellow LED ON
  - Green LED OFF
  - Red LED OFF
  - Buzzer OFF

- **Dry Soil**
  - Red LED ON
  - Green LED OFF
  - Yellow LED OFF
  - Buzzer ON

The current moisture value and soil status are displayed on the Serial Monitor.

---

## Project Structure

```text
Day-08-Smart-Soil-Moisture-Monitor/
│
├── circuit/
│   └── circuit_diagram.png
│
├── code/
│   └── smart_soil_moisture_monitor.ino
│
├── docs/
│   └── architecture.md
│
├── screenshots/
│   ├── wet_soil.png
│   ├── moderate_soil.png
│   ├── dry_soil.png
│   └── serial_monitor.png
│
└── README.md
```

---

## Screenshots

### Circuit Diagram

![Circuit Diagram](circuit/circuit_diagram.png)

### Wet Soil

![Wet Soil](screenshots/wet_soil.png)

### Moderate Soil

![Moderate Soil](screenshots/moderate_soil.png)

### Dry Soil

![Dry Soil](screenshots/dry_soil.png)

### Serial Monitor

![Serial Monitor](screenshots/serial_monitor.png)

---

## Concepts Learned

- Analog sensor interfacing
- ADC (Analog-to-Digital Conversion)
- Threshold-based decision making
- Embedded monitoring systems
- GPIO control
- Serial communication for debugging

---

## Future Improvements

- ESP32 Wi-Fi connectivity
- Automatic irrigation pump control
- Web-based monitoring dashboard
- Email and mobile notifications
- Historical soil moisture data logging

---

## Author

**Smruthi Nayak**

B.Tech Computer Science Engineering