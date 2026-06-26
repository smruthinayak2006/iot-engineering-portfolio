# Smart Fire Detection System 🔥

## Overview

An embedded safety monitoring system using Arduino Uno and TMP36 temperature sensor to detect abnormal temperature conditions and trigger automatic alerts.

This project demonstrates sensor interfacing, embedded programming, and IoT product design fundamentals.

---

## Problem Statement

Fire accidents in homes, industries, and server rooms require early detection systems.

This project provides a low-cost automated monitoring system capable of detecting high temperature conditions and activating warning indicators.

---

## Features

- Real-time temperature monitoring
- Automatic fire risk detection
- LED based status indication
- Buzzer emergency alert
- Serial monitor logging

---

## Hardware Components

- Arduino Uno
- TMP36 Temperature Sensor
- Red LED
- Green LED
- Piezo Buzzer
- Resistors

---

## Software Used

- Tinkercad Circuits
- Arduino IDE
- Embedded C++

---

## System Architecture


Temperature Sensor
        |
        v
Arduino UNO
        |
Temperature Processing
        |
Decision Algorithm
        |
   -------------
   |           |
  LEDs       Buzzer


---

## Working

The TMP36 sensor continuously measures temperature.

Arduino reads sensor voltage through ADC and converts it into Celsius.

If temperature crosses the safety threshold:

- Red LED turns ON
- Buzzer activates

Otherwise:

- Green LED remains ON

---

## Concepts Learned

- Sensor interfacing
- ADC conversion
- GPIO control
- Embedded decision making
- Hardware debugging

---

## Future Improvements

- ESP32 WiFi connectivity
- MQTT alerts
- Mobile dashboard
- Cloud monitoring
- Secure device communication