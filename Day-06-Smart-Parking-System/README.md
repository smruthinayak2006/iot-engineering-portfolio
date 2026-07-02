# Smart Parking System 🚗

## Overview

An Arduino-based smart parking system that uses an HC-SR04 ultrasonic sensor to detect vehicle presence and indicate parking slot availability using LEDs and a buzzer.

---

## Features

- Automatic vehicle detection
- Parking slot availability monitoring
- Visual LED indication
- Audible parking alert
- Real-time serial monitoring

---

## Components

- Arduino Uno
- HC-SR04 Ultrasonic Sensor
- Green LED
- Red LED
- 2 × 220Ω Resistors
- Piezo Buzzer
- Jumper Wires

---

## Pin Configuration

| Component | Pin |
|-----------|-----|
| HC-SR04 Trigger | D9 |
| HC-SR04 Echo | D10 |
| Green LED | D7 |
| Red LED | D8 |
| Buzzer | D6 |

---

## Working

### Parking Available

- Green LED ON
- Red LED OFF
- Buzzer OFF

### Parking Occupied

- Red LED ON
- Green LED OFF
- Short Buzzer Alert

---

## Concepts Learned

- Ultrasonic Distance Measurement
- Object Detection
- Threshold-Based Decision Making
- GPIO Control
- Embedded Automation

---

## Future Improvements

- Multi-slot Parking Monitoring
- Servo Barrier Gate
- LCD/OLED Display
- ESP32 Wi-Fi Connectivity
- Mobile Parking Dashboard