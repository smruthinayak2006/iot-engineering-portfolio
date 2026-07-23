/*
==========================================
 Smart Water Tank Level Monitor
 Day 2 - IoT Engineering Portfolio
==========================================

Hardware:
- Arduino Uno
- HC-SR04 Ultrasonic Sensor
- Green LED
- Yellow LED
- Red LED
- Piezo Buzzer

Author: Smriti
*/

// ---------------- Pin Definitions ----------------
const int TRIG_PIN = 12;
const int ECHO_PIN = 11;

const int GREEN_LED = 8;
const int YELLOW_LED = 9;
const int RED_LED = 10;

const int BUZZER = 7;

// ---------------- Thresholds (cm) ----------------
const int FULL_LEVEL = 10;
const int MEDIUM_LEVEL = 20;

// ---------------- Global Variable ----------------
float distance = 0;

//==================================================
// Function: Read Distance from HC-SR04
//==================================================
float readDistance() {

  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);

  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long duration = pulseIn(ECHO_PIN, HIGH);

  float distance = duration * 0.0343 / 2;

  return distance;
}

//==================================================
// Function: Display Tank Status
//==================================================
void updateTankStatus(float distance) {

  digitalWrite(GREEN_LED, LOW);
  digitalWrite(YELLOW_LED, LOW);
  digitalWrite(RED_LED, LOW);
  noTone(BUZZER);

  if (distance > MEDIUM_LEVEL) {

    digitalWrite(GREEN_LED, HIGH);

    Serial.println("Tank Status : LOW WATER");

  }

  else if (distance > FULL_LEVEL) {

    digitalWrite(YELLOW_LED, HIGH);

    Serial.println("Tank Status : MEDIUM LEVEL");

  }

  else {

    digitalWrite(RED_LED, HIGH);

    tone(BUZZER, 1000);

    Serial.println("Tank Status : TANK FULL");
  }
}

//==================================================
// Setup
//==================================================
void setup() {

  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);

  pinMode(GREEN_LED, OUTPUT);
  pinMode(YELLOW_LED, OUTPUT);
  pinMode(RED_LED, OUTPUT);

  pinMode(BUZZER, OUTPUT);

  Serial.begin(9600);

  Serial.println("=======================================");
  Serial.println(" Smart Water Tank Level Monitor ");
  Serial.println("=======================================");
}

//==================================================
// Main Loop
//==================================================
void loop() {

  distance = readDistance();

  Serial.print("Distance : ");
  Serial.print(distance);
  Serial.println(" cm");

  updateTankStatus(distance);

  Serial.println("---------------------------");

  delay(1000);
}