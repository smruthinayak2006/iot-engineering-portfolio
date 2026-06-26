# Smart Water Tank Level Monitor

## System Architecture

```text
HC-SR04 Ultrasonic Sensor
          |
          v
     Arduino UNO
          |
 Distance Calculation
          |
 State Decision Logic
          |
 -------------------------
 |         |             |
 v         v             v

Green    Yellow       Red + Buzzer
 LED      LED
```

## Working

1. The HC-SR04 measures the distance to the water surface.
2. Arduino calculates the distance in centimeters.
3. The system determines the tank state:
   - Low Water
   - Medium Level
   - Tank Full
4. LEDs and buzzer indicate the current status.

## Future Improvements

- OLED Display
- ESP32 WiFi
- MQTT Dashboard
- Mobile Notifications
- Cloud Data Logging