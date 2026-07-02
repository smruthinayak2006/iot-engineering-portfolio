/*
=========================================================
        Smart Parking System
        Day 6 - IoT Engineering Portfolio
=========================================================
*/

const int TRIG_PIN = 9;
const int ECHO_PIN = 10;

const int GREEN_LED = 7;
const int RED_LED = 8;

const int BUZZER = 6;

float distance;

// ----------------------------------------
// Measure Distance
// ----------------------------------------

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

// ----------------------------------------
// Setup
// ----------------------------------------

void setup() {

  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);

  pinMode(GREEN_LED, OUTPUT);
  pinMode(RED_LED, OUTPUT);

  pinMode(BUZZER, OUTPUT);

  Serial.begin(9600);

  Serial.println("==================================");
  Serial.println(" Smart Parking System");
  Serial.println("==================================");
}

// ----------------------------------------
// Main Loop
// ----------------------------------------

void loop() {

  distance = readDistance();

  Serial.print("Distance : ");
  Serial.print(distance);
  Serial.println(" cm");

  // ----------------------------------
  // Vehicle Detected
  // ----------------------------------

  if (distance <= 10) {

    digitalWrite(RED_LED, HIGH);
    digitalWrite(GREEN_LED, LOW);

    tone(BUZZER, 1500);
    delay(250);
    noTone(BUZZER);

    Serial.println("Parking Status : OCCUPIED");
    Serial.println("Vehicle Detected");
  }

  // ----------------------------------
  // Parking Available
  // ----------------------------------

  else {

    digitalWrite(RED_LED, LOW);
    digitalWrite(GREEN_LED, HIGH);

    noTone(BUZZER);

    Serial.println("Parking Status : AVAILABLE");
    Serial.println("Parking Slot Free");
  }

  Serial.println("--------------------------------");

  delay(1000);
}