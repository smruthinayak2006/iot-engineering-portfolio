# Smart Home Automation Architecture

```
                LDR Sensor
                    │
                    ▼
              Arduino UNO
                    ▲
                    │
              PIR Sensor
                    │
                    ▼
      ┌─────────────┼─────────────┐
      ▼             ▼             ▼
 Green LED     Yellow LED     Red LED
                                   │
                                   ▼
                              Piezo Buzzer

                    │
                    ▼
             Serial Monitor
```

## Workflow

1. Read ambient light level from the LDR sensor.
2. Read motion status from the PIR sensor.
3. Determine operating mode:
   - Day Mode
   - Night Mode
   - Intruder Alert
4. Update LEDs based on the current mode.
5. Activate the buzzer during an intrusion event.
6. Display system status on the Serial Monitor.