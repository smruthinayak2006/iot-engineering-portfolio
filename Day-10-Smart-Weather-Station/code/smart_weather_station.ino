#include <DHT.h>

#define DHTPIN 2
#define DHTTYPE DHT22

DHT dht(DHTPIN, DHTTYPE);

const int GREEN_LED = 8;
const int YELLOW_LED = 9;
const int RED_LED = 10;
const int BUZZER = 6;

void setup() {

  pinMode(GREEN_LED, OUTPUT);
  pinMode(YELLOW_LED, OUTPUT);
  pinMode(RED_LED, OUTPUT);
  pinMode(BUZZER, OUTPUT);

  Serial.begin(9600);
  dht.begin();

  Serial.println("====================================");
  Serial.println("      Smart Weather Station");
  Serial.println("====================================");
}

void loop() {

  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  if (isnan(temperature) || isnan(humidity)) {
    Serial.println("Sensor Read Error!");
    delay(2000);
    return;
  }

  // Reset Outputs
  digitalWrite(GREEN_LED, LOW);
  digitalWrite(YELLOW_LED, LOW);
  digitalWrite(RED_LED, LOW);
  noTone(BUZZER);

  Serial.print("Temperature : ");
  Serial.print(temperature);
  Serial.println(" °C");

  Serial.print("Humidity    : ");
  Serial.print(humidity);
  Serial.println(" %");

  Serial.println();

  // ==========================
  // EXTREME WEATHER
  // ==========================
  if (temperature >= 40 || humidity >= 85) {

    digitalWrite(RED_LED, HIGH);
    tone(BUZZER, 1000);

    Serial.println("Weather : EXTREME");
    Serial.println("Status  : Dangerous Conditions");
  }

  // ==========================
  // MODERATE WEATHER
  // ==========================
  else if ((temperature >= 30 && temperature < 40) ||
           (humidity >= 70 && humidity < 85)) {

    digitalWrite(YELLOW_LED, HIGH);

    tone(BUZZER, 1200);
    delay(200);
    noTone(BUZZER);

    Serial.println("Weather : MODERATE");
    Serial.println("Status  : Conditions Changing");
  }

  // ==========================
  // GOOD WEATHER
  // ==========================
  else {

    digitalWrite(GREEN_LED, HIGH);

    Serial.println("Weather : GOOD");
    Serial.println("Status  : Pleasant Conditions");
  }

  Serial.println("------------------------------------");

  delay(2000);
}
