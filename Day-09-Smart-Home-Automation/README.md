# Smart Home Automation 🏠

## Overview

A simple Arduino-based smart home automation system that combines a light sensor (LDR) and a PIR motion sensor to monitor lighting conditions and detect movement. The system automatically switches between Day Mode, Night Mode, and Intruder Alert.

---

## Features

- Automatic Day/Night detection
- Motion detection using PIR sensor
- Intruder alert with buzzer
- Three LED status indication
- Real-time Serial Monitor updates
- Beginner-friendly Arduino project

---

## Components Used

- Arduino Uno
- PIR Motion Sensor
- LDR Sensor Module
- Red LED
- Yellow LED
- Green LED
- Piezo Buzzer
- 3 × 220Ω Resistors
- Jumper Wires

---

## Pin Connections

| Component | Arduino Pin |
|-----------|-------------|
| PIR Sensor | D2 |
| LDR Sensor (AO) | A0 |
| Green LED | D8 |
| Yellow LED | D9 |
| Red LED | D10 |
| Piezo Buzzer | D6 |

---

## Working

### Day Mode ☀️
- Bright environment detected
- Green LED ON
- Buzzer OFF

### Night Mode 🌙
- Dark environment
- Yellow LED ON
- Home secured
- Buzzer OFF

### Intruder Alert 🚨
- Dark environment
- Motion detected
- Red LED ON
- Buzzer ON

---

## Screenshots

### Circuit Diagram

![Circuit](circuit/circuit_diagram.png)

### Day Mode

![Day Mode](screenshots/day_mode.png)

### Night Mode

![Night Mode](screenshots/night_mode.png)

### Intruder Alert

![Intruder Alert](screenshots/intruder_alert.png)

### Serial Monitor

![Serial Monitor](screenshots/serial_monitor.png)

---

## Concepts Learned

- Analog Sensor Interfacing
- Motion Detection
- Conditional Programming
- Home Automation
- Embedded Security Systems
- Arduino GPIO Control

---

## Future Improvements

- ESP32 Wi-Fi Integration
- Mobile Notifications
- Smart Home Dashboard
- Cloud Monitoring
- Relay-based Appliance Control

---

## Author

Smruthi Nayak