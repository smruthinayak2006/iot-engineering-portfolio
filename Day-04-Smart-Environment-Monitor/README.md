# Smart Environment Monitor 🌡️💧

## Overview

An Arduino-based environmental monitoring system that continuously measures temperature and humidity using a DHT22 sensor and provides visual and audible alerts based on environmental conditions.

---

## Problem Statement

Monitoring environmental conditions is essential in homes, data centers, warehouses, greenhouses, and industrial environments. This project demonstrates how embedded systems can detect unsafe environmental conditions and alert users in real time.

---

## Features

- Real-time temperature monitoring
- Real-time humidity monitoring
- Three environmental states
- LED status indicators
- Audible buzzer alert
- Serial Monitor logging

---

## Components Used

- Arduino Uno
- DHT22 Temperature & Humidity Sensor
- Green LED
- Yellow LED
- Red LED
- Piezo Buzzer
- 220Ω Resistors
- Jumper Wires

---

## Working

### 🟢 Normal

- Green LED ON
- Buzzer OFF

Condition:

- Temperature < 30°C
- Humidity < 70%

---

### 🟡 Warning

- Yellow LED ON
- Buzzer OFF

Condition:

- Temperature ≥ 30°C

OR

- Humidity ≥ 70%

---

### 🔴 Critical

- Red LED ON
- Buzzer ON

Condition:

- Temperature ≥ 40°C

OR

- Humidity ≥ 85%

---

## Concepts Learned

- DHT22 Sensor Interfacing
- Digital Sensor Communication
- Multi-Parameter Monitoring
- Embedded Decision Making
- Threshold-Based Alert Systems

---

## Future Improvements

- ESP32 WiFi Monitoring
- MQTT Dashboard
- Mobile Notifications
- Cloud Storage
- Historical Data Logging