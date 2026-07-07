//==============================================
// Smart Soil Moisture Monitor
//==============================================

const int SOIL_SENSOR = A0;

const int GREEN_LED = 8;
const int YELLOW_LED = 9;
const int RED_LED = 10;

const int BUZZER = 11;

int moistureValue = 0;

void setup() {

  pinMode(GREEN_LED, OUTPUT);
  pinMode(YELLOW_LED, OUTPUT);
  pinMode(RED_LED, OUTPUT);

  pinMode(BUZZER, OUTPUT);

  Serial.begin(9600);

  Serial.println("======================================");
  Serial.println(" Smart Soil Moisture Monitor");
  Serial.println("======================================");
}

void loop() {

  moistureValue = analogRead(SOIL_SENSOR);

  Serial.print("Moisture Value : ");
  Serial.println(moistureValue);

  if (moistureValue < 350) {

    digitalWrite(GREEN_LED, HIGH);
    digitalWrite(YELLOW_LED, LOW);
    digitalWrite(RED_LED, LOW);

    noTone(BUZZER);

    Serial.println("Status : WET SOIL");

  }
  else if (moistureValue < 700) {

    digitalWrite(GREEN_LED, LOW);
    digitalWrite(YELLOW_LED, HIGH);
    digitalWrite(RED_LED, LOW);

    tone(BUZZER, 1000);
    delay(200);
    noTone(BUZZER);

    Serial.println("Status : MODERATE");

  }
  else {

    digitalWrite(GREEN_LED, LOW);
    digitalWrite(YELLOW_LED, LOW);
    digitalWrite(RED_LED, HIGH);

    tone(BUZZER, 2000);

    Serial.println("Status : DRY SOIL");

  }

  Serial.println("--------------------------------------");

  delay(1000);
}