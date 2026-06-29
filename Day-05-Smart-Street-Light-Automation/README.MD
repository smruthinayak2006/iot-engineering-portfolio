# Smart Street Light Automation 💡

## Overview

An Arduino-based smart street lighting system that automatically adjusts its status according to ambient light intensity using an LDR sensor.

---

## Features

- Automatic light detection
- Three lighting conditions
- Visual LED indication
- Audible alert
- Serial monitoring

---

## Components

- Arduino Uno
- LDR Sensor Module
- 3 LEDs
- 3 × 220Ω Resistors
- Piezo Buzzer
- Jumper Wires

---

## Pin Configuration

| Component | Pin |
|-----------|-----|
| LDR AO | A0 |
| Green LED | D8 |
| Yellow LED | D9 |
| Red LED | D10 |
| Buzzer | D11 |

---

## Working

### Daylight

- Green LED ON
- Street Lights OFF

### Evening

- Yellow LED ON
- Warning Beep

### Night

- Red LED ON
- Street Lights ON
- Buzzer Alert

---

## Concepts Learned

- Analog Sensor Reading
- ADC
- Threshold Logic
- GPIO Control
- Embedded Decision Making

---

## Future Improvements

- ESP32 WiFi Integration
- Automatic Street Light Relay
- MQTT Monitoring
- Mobile Dashboard
- Energy Usage Analytics