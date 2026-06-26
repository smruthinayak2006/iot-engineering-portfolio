# Smart Fire Detection System Architecture


## Block Diagram

```text

        +----------------+
        | TMP36 Sensor   |
        +----------------+
                |
                |
                v

        +----------------+
        |  Arduino UNO   |
        | Microcontroller|
        +----------------+
                |
                |
        Decision Algorithm
                |
        ------------------
        |                |
        v                v

   LED Indicator    Buzzer Alert


```


## Data Flow

Sensor Input
↓
ADC Conversion
↓
Temperature Calculation
↓
Threshold Comparison
↓
Alert Activation


## Input

- TMP36 Temperature Sensor
- Analog Temperature Data


## Processing

- Analog to Digital Conversion
- Temperature Calculation
- Fire Threshold Detection


## Output

- Green LED → Safe Condition
- Red LED → Fire Alert
- Buzzer → Emergency Alarm


## Future IoT Upgrade

- ESP32 WiFi Integration
- MQTT Communication
- Cloud Dashboard
- Mobile Notifications
```