/*
==========================================================
 Smart Environment Monitor
 Day 4 - IoT Engineering Portfolio
==========================================================
*/

#include <DHT.h>

// ---------------- Pin Definitions ----------------
#define DHTPIN 2
#define DHTTYPE DHT22

const int GREEN_LED = 8;
const int YELLOW_LED = 9;
const int RED_LED = 10;
const int BUZZER = 11;

// ---------------- Create DHT Object ----------------
DHT dht(DHTPIN, DHTTYPE);

// ---------------- Functions ----------------

void normalMode(float temperature, float humidity) {

  digitalWrite(GREEN_LED, HIGH);
  digitalWrite(YELLOW_LED, LOW);
  digitalWrite(RED_LED, LOW);

  noTone(BUZZER);

  Serial.println("Status : NORMAL");
  Serial.print("Temperature : ");
  Serial.print(temperature);
  Serial.println(" °C");

  Serial.print("Humidity : ");
  Serial.print(humidity);
  Serial.println(" %");
}

void warningMode(float temperature, float humidity) {

  digitalWrite(GREEN_LED, LOW);
  digitalWrite(YELLOW_LED, HIGH);
  digitalWrite(RED_LED, LOW);

  noTone(BUZZER);

  Serial.println("Status : WARNING");
  Serial.print("Temperature : ");
  Serial.print(temperature);
  Serial.println(" °C");

  Serial.print("Humidity : ");
  Serial.print(humidity);
  Serial.println(" %");
}

void criticalMode(float temperature, float humidity) {

  digitalWrite(GREEN_LED, LOW);
  digitalWrite(YELLOW_LED, LOW);
  digitalWrite(RED_LED, HIGH);

  tone(BUZZER, 1200);

  Serial.println("Status : CRITICAL");
  Serial.print("Temperature : ");
  Serial.print(temperature);
  Serial.println(" °C");

  Serial.print("Humidity : ");
  Serial.print(humidity);
  Serial.println(" %");
}

void setup() {

  pinMode(GREEN_LED, OUTPUT);
  pinMode(YELLOW_LED, OUTPUT);
  pinMode(RED_LED, OUTPUT);

  pinMode(BUZZER, OUTPUT);

  Serial.begin(9600);

  dht.begin();

  Serial.println("=========================================");
  Serial.println(" Smart Environment Monitor");
  Serial.println("=========================================");
}

void loop() {

  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  if (isnan(temperature) || isnan(humidity)) {

    Serial.println("Failed to read DHT22 Sensor!");
    delay(2000);
    return;
  }

  if (temperature >= 40 || humidity >= 85) {

    criticalMode(temperature, humidity);

  }

  else if (temperature >= 30 || humidity >= 70) {

    warningMode(temperature, humidity);

  }

  else {

    normalMode(temperature, humidity);

  }

  Serial.println("-----------------------------------------");

  delay(2000);
}