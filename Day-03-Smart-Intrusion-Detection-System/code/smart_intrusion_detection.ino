/*
==========================================================
 Smart Intrusion Detection System
 Day 3 - IoT Engineering Portfolio
==========================================================
*/

const int PIR_PIN = 2;
const int GREEN_LED = 8;
const int RED_LED = 9;
const int BUZZER = 10;

bool motionDetected = false;

void safeMode() {
  digitalWrite(GREEN_LED, HIGH);
  digitalWrite(RED_LED, LOW);
  digitalWrite(BUZZER, LOW);

  Serial.println("Status : SAFE");
  Serial.println("No Motion Detected");
}

void alertMode() {
  digitalWrite(GREEN_LED, LOW);
  digitalWrite(RED_LED, HIGH);
  digitalWrite(BUZZER, HIGH);

  Serial.println("Status : ALERT");
  Serial.println("Motion Detected!");
}

void setup() {

  pinMode(PIR_PIN, INPUT);

  pinMode(GREEN_LED, OUTPUT);
  pinMode(RED_LED, OUTPUT);
  pinMode(BUZZER, OUTPUT);

  Serial.begin(9600);

  Serial.println("========================================");
  Serial.println(" Smart Intrusion Detection System");
  Serial.println("========================================");
}

void loop() {

  motionDetected = digitalRead(PIR_PIN);

  if (motionDetected) {
    alertMode();
  } else {
    safeMode();
  }

  Serial.println("----------------------------------------");

  delay(1000);
}