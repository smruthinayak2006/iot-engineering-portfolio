# Smart Weather Station Architecture

```
          DHT22 Sensor
                │
                ▼
        Arduino Uno
                │
     Read Temperature &
       Humidity Values
                │
                ▼
     Weather Classification
                │
      ┌─────────┼─────────┐
      ▼         ▼         ▼
  Green LED  Yellow LED  Red LED
                │
                ▼
          Piezo Buzzer
                │
                ▼
         Serial Monitor
```

The Arduino continuously reads temperature and humidity from the DHT22 sensor. Based on predefined thresholds, the system classifies the weather into Good, Moderate, or Extreme conditions and activates the corresponding LEDs and buzzer while displaying live readings on the Serial Monitor.