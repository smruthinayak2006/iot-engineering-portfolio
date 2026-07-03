# Smart Gas Leakage Detection System ⛽

## Overview

An Arduino-based safety system that continuously monitors gas concentration using an MQ-2 gas sensor. The system classifies gas levels into Safe, Warning, and Danger states while providing visual and audible alerts.

---

## Features

- Real-time gas leakage monitoring
- Three alert levels
- LED status indication
- Piezo buzzer alarm
- Serial monitor logging
- Adjustable gas concentration simulation in Wokwi

---

## Components

- Arduino Uno
- MQ-2 Gas Sensor
- Piezo Buzzer
- Red LED
- Yellow LED
- Green LED
- 3 × 220Ω Resistors
- Jumper Wires

---

## Circuit Connections

| Component | Arduino Pin |
|-----------|-------------|
| MQ-2 AOUT | A0 |
| MQ-2 VCC | 5V |
| MQ-2 GND | GND |
| Green LED | D8 |
| Yellow LED | D9 |
| Red LED | D10 |
| Buzzer | D11 |

---

## Working

### Safe Mode

- Gas level below 300
- Green LED ON
- Buzzer OFF

---

### Warning Mode

- Gas level between 300 and 649
- Yellow LED ON
- Short warning beep

---

### Danger Mode

- Gas level above 650
- Red LED ON
- Continuous buzzer alarm

---

## Project Structure

```
Day-07-Smart-Gas-Leakage-Detection/
│
├── circuit/
│   └── circuit_diagram.png
│
├── code/
│   └── smart_gas_leakage_detection.ino
│
├── docs/
│   └── architecture.md
│
├── screenshots/
│   ├── safe_mode.png
│   ├── warning_mode.png
│   ├── danger_mode.png
│   └── serial_monitor.png
│
└── README.md
```

---

## Output

### Safe
- Green LED ON
- No buzzer

### Warning
- Yellow LED ON
- Intermittent buzzer

### Danger
- Red LED ON
- Continuous buzzer

---

## Concepts Learned

- Analog sensor interfacing
- ADC (Analog-to-Digital Conversion)
- Threshold-based decision making
- Multi-level alert systems
- Embedded safety monitoring
- GPIO control
- Serial debugging

---

## Future Improvements

- GSM/SMS alerts
- Wi-Fi notifications using ESP32
- LCD/OLED display
- Cloud monitoring dashboard
- Mobile application integration

---

## Author

**Smruthi Nayak**

B.Tech Computer Science & Engineering

IoT Engineering Portfolio