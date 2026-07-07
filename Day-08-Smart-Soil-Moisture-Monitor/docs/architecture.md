# Smart Soil Moisture Monitor Architecture

```
          Soil Moisture Sensor
                   │
                   ▼
             Arduino UNO
                   │
      ┌────────────┼────────────┐
      ▼            ▼            ▼
 Green LED    Yellow LED    Red LED
                               │
                               ▼
                           Piezo Buzzer

                   │
                   ▼
             Serial Monitor
```

## Workflow

1. Read soil moisture value from analog sensor.
2. Compare the reading with predefined thresholds.
3. Determine soil condition:
   - Wet
   - Moderate
   - Dry
4. Update LEDs accordingly.
5. Activate buzzer if soil is dry.
6. Display readings on Serial Monitor.