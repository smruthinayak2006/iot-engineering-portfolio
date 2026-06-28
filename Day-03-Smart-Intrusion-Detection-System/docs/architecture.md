# Smart Intrusion Detection System

## System Architecture

```text
             PIR Motion Sensor
                    |
                    v
             Arduino UNO
                    |
          Motion Detection Logic
                    |
        -------------------------
        |                       |
        v                       v
   Green LED              Red LED + Buzzer
```

## Input

- PIR Motion Sensor

## Processing

- Arduino continuously reads the PIR sensor output.
- If motion is detected, the system activates the alarm.
- Otherwise, the system remains in monitoring mode.

## Output

- Green LED → Safe
- Red LED → Intrusion Detected
- Buzzer → Audible Alert

## Future Improvements

- ESP32 WiFi Integration
- MQTT Notifications
- Mobile App Alerts
- Camera Integration
- Motion Event Logging