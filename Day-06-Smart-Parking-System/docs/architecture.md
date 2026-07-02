# System Architecture

Vehicle
   │
   ▼
HC-SR04 Ultrasonic Sensor
   │
   ▼
Arduino Uno
   │
Distance Measurement
   │
Threshold Comparison
   │
   ├──────────────┐
   ▼              ▼
Parking Free   Parking Occupied
   │              │
Green LED      Red LED
               │
            Buzzer Alert

Input:
- Vehicle Distance

Processing:
- Ultrasonic Distance Calculation
- Threshold Comparison

Output:
- Green LED (Parking Available)
- Red LED (Parking Occupied)
- Audible Alert