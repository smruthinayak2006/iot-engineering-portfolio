# Smart Gas Leakage Detection

## Components

- Arduino Uno
- MQ-2 Gas Sensor
- Piezo Buzzer
- Red LED
- Yellow LED
- Green LED

## Workflow

MQ-2 Sensor
      │
      ▼
Arduino Uno
      │
      ├── Green LED → Safe
      ├── Yellow LED → Warning
      ├── Red LED → Danger
      └── Buzzer → Alarm