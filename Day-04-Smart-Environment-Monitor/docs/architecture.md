# Smart Environment Monitor

## System Architecture

```text
           DHT22 Sensor
   Temperature + Humidity
                │
                ▼
           Arduino UNO
                │
     Environment Evaluation
                │
      ┌─────────┼─────────┐
      ▼         ▼         ▼
 Green LED  Yellow LED  Red LED
                           │
                           ▼
                        Buzzer
```

## Input

- Temperature
- Humidity

## Processing

- Reads environmental conditions from the DHT22 sensor.
- Compares values against predefined thresholds.
- Classifies the environment into:
  - Normal
  - Warning
  - Critical

## Output

- Green LED → Normal
- Yellow LED → Warning
- Red LED + Buzzer → Critical

## Future Improvements

- ESP32 WiFi Integration
- MQTT Dashboard
- Cloud Monitoring
- SMS / Email Alerts
- Data Logging