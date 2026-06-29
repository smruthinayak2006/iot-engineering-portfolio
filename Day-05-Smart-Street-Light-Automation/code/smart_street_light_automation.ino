/*
=========================================================
      Smart Street Light Automation
      Day 5 - IoT Engineering Portfolio
=========================================================
*/

const int LDR_PIN = A0;

const int GREEN_LED = 8;
const int YELLOW_LED = 9;
const int RED_LED = 10;

const int BUZZER = 11;

int lightValue = 0;

void setup() {

  pinMode(GREEN_LED, OUTPUT);
  pinMode(YELLOW_LED, OUTPUT);
  pinMode(RED_LED, OUTPUT);

  pinMode(BUZZER, OUTPUT);

  Serial.begin(9600);

  Serial.println("===================================");
  Serial.println(" Smart Street Light Automation");
  Serial.println("===================================");
}

void loop() {

  lightValue = analogRead(LDR_PIN);

  Serial.print("Light Value : ");
  Serial.println(lightValue);

  // ----------------------------------
  // BRIGHT DAY
  // ----------------------------------

  if (lightValue > 700) {

    digitalWrite(GREEN_LED, HIGH);
    digitalWrite(YELLOW_LED, LOW);
    digitalWrite(RED_LED, LOW);

    noTone(BUZZER);

    Serial.println("Status : DAYLIGHT");
    Serial.println("Street Lights OFF");
  }

  // ----------------------------------
  // EVENING
  // ----------------------------------

  else if (lightValue > 350) {

    digitalWrite(GREEN_LED, LOW);
    digitalWrite(YELLOW_LED, HIGH);
    digitalWrite(RED_LED, LOW);

    tone(BUZZER, 1000);
    delay(150);
    noTone(BUZZER);

    Serial.println("Status : EVENING");
    Serial.println("Preparing Lights");
  }

  // ----------------------------------
  // NIGHT
  // ----------------------------------

  else {

    digitalWrite(GREEN_LED, LOW);
    digitalWrite(YELLOW_LED, LOW);
    digitalWrite(RED_LED, HIGH);

    tone(BUZZER, 1800);
    delay(300);
    noTone(BUZZER);

    Serial.println("Status : NIGHT");
    Serial.println("Street Lights ON");
  }

  Serial.println("--------------------------------");

  delay(1000);
}
