# ESP32 Smart Weather Station - Architecture

## Overview

The system monitors environmental conditions using a DHT22 sensor connected to an ESP32. Based on temperature and humidity values, the ESP32 classifies the environment into Good, Moderate, or Extreme conditions and provides both local alerts and network connectivity.

---

## Architecture

```text
                 DHT22
        Temperature & Humidity
                    │
                    ▼
              ESP32 DevKit
                    │
      ┌─────────────┼─────────────┐
      │             │             │
      ▼             ▼             ▼
 Green LED     Yellow LED     Red LED
                    │
                    ▼
                 Buzzer
                    │
                    ▼
             Wi-Fi Connection
                    │
                    ▼
            Serial Monitor
```

---

## System Workflow

1. ESP32 initializes the DHT22 sensor.
2. Connects to the configured Wi-Fi network.
3. Reads temperature and humidity periodically.
4. Evaluates environmental conditions.
5. Updates LEDs and buzzer.
6. Displays sensor readings through the Serial Monitor.
7. Hosts a web server (implemented in the next phase).

---

## Current Features

- DHT22 temperature sensing
- Humidity monitoring
- Wi-Fi connectivity
- Multi-level environmental classification
- LED status indication
- Buzzer alerts
- Serial logging

---

## Future Enhancements

- Web dashboard
- Live sensor updates
- REST API
- Email notifications
- Cloud logging
- Historical graphs
- Mobile dashboard