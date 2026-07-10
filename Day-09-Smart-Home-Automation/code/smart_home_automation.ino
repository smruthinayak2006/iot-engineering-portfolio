const int PIR_PIN = 2;
const int LDR_PIN = A0;

const int GREEN_LED = 8;
const int YELLOW_LED = 9;
const int RED_LED = 10;

const int BUZZER = 6;

int lightValue;
int motion;

void setup() {

  pinMode(PIR_PIN, INPUT);

  pinMode(GREEN_LED, OUTPUT);
  pinMode(YELLOW_LED, OUTPUT);
  pinMode(RED_LED, OUTPUT);

  pinMode(BUZZER, OUTPUT);

  Serial.begin(9600);

  Serial.println("=================================");
  Serial.println(" Smart Home Automation");
  Serial.println("=================================");
}

void loop() {

  lightValue = analogRead(LDR_PIN);
  motion = digitalRead(PIR_PIN);

  Serial.print("Light Value : ");
  Serial.println(lightValue);

  Serial.print("Motion : ");

  if (motion == HIGH)
    Serial.println("Detected");
  else
    Serial.println("Not Detected");

  Serial.println();

  // ---------- DAY ----------
  if (lightValue < 300) {

    Serial.println("Mode : DAY");

    digitalWrite(GREEN_LED, HIGH);
    digitalWrite(YELLOW_LED, LOW);
    digitalWrite(RED_LED, LOW);

    noTone(BUZZER);
  }

  // ---------- NIGHT ----------
  else {

    if (motion == LOW) {

      Serial.println("Mode : NIGHT");
      Serial.println("Home Secure");

      digitalWrite(GREEN_LED, LOW);
      digitalWrite(YELLOW_LED, HIGH);
      digitalWrite(RED_LED, LOW);

      noTone(BUZZER);
    }

    else {

      Serial.println("Mode : INTRUDER ALERT");
      Serial.println("Motion Detected!");

      digitalWrite(GREEN_LED, LOW);
      digitalWrite(YELLOW_LED, LOW);
      digitalWrite(RED_LED, HIGH);

      tone(BUZZER, 1000);
    }
  }

  Serial.println("---------------------------------");

  delay(1000);
}