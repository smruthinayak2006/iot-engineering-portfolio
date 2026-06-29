# System Architecture

Ambient Light
      │
      ▼
LDR Sensor Module
      │
      ▼
Arduino Uno
      │
      ▼
Light Level Decision Logic
      │
      ├───────────────┐
      ▼               ▼
 LED Indicators    Buzzer Alert

Input:
- Ambient Light

Processing:
- Analog Value Reading
- Threshold Comparison

Output:
- Green LED (Daylight)
- Yellow LED (Evening)
- Red LED (Night)
- Audible Alert