#include <WiFi.h>
#include <WebServer.h>
#include <DHT.h>

// ======================
// WiFi Configuration
// ======================
const char* ssid = "Wokwi-GUEST";
const char* password = "";

// ======================
// Pin Configuration
// ======================
#define DHTPIN      4
#define DHTTYPE     DHT22

#define GREEN_LED   18
#define YELLOW_LED  19
#define RED_LED     21
#define BUZZER      23

// ======================
// Objects
// ======================
DHT dht(DHTPIN, DHTTYPE);
WebServer server(80);

// ======================
// Global Variables
// ======================
float temperature = 0;
float humidity = 0;

String weatherStatus = "GOOD";
String description = "Pleasant Conditions";

// ======================
// Function Prototypes
// ======================
void connectWiFi();
void readSensor();
void updateIndicators();
void handleRoot();

// ======================
// Setup
// ======================
void setup() {

  Serial.begin(115200);

  pinMode(GREEN_LED, OUTPUT);
  pinMode(YELLOW_LED, OUTPUT);
  pinMode(RED_LED, OUTPUT);
  pinMode(BUZZER, OUTPUT);

  digitalWrite(GREEN_LED, LOW);
  digitalWrite(YELLOW_LED, LOW);
  digitalWrite(RED_LED, LOW);
  digitalWrite(BUZZER, LOW);

  dht.begin();

  connectWiFi();

  server.on("/", handleRoot);

  server.begin();

  Serial.println();
  Serial.println("==================================");
  Serial.println(" ESP32 Smart Weather Station");
  Serial.println("==================================");
  Serial.print("Dashboard : http://");
  Serial.println(WiFi.localIP());
}

void loop() {

  server.handleClient();

  readSensor();

  updateIndicators();

  Serial.println("--------------------------------------");
  Serial.print("Temperature : ");
  Serial.print(temperature);
  Serial.println(" °C");

  Serial.print("Humidity    : ");
  Serial.print(humidity);
  Serial.println(" %");

  Serial.print("Status      : ");
  Serial.println(weatherStatus);

  delay(2000);
}

void connectWiFi() {

  Serial.println();
  Serial.print("Connecting to WiFi");

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println();
  Serial.println("WiFi Connected!");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());
}

void readSensor() {

  temperature = dht.readTemperature();
  humidity = dht.readHumidity();

  if (isnan(temperature) || isnan(humidity)) {

    Serial.println("Failed to read DHT22!");

    temperature = 0;
    humidity = 0;
  }
}

void updateIndicators() {

  digitalWrite(GREEN_LED, LOW);
  digitalWrite(YELLOW_LED, LOW);
  digitalWrite(RED_LED, LOW);
  digitalWrite(BUZZER, LOW);

  // GOOD
  if (temperature < 30 && humidity < 70) {

    weatherStatus = "GOOD";
    description = "Pleasant Conditions";

    digitalWrite(GREEN_LED, HIGH);
  }

  // MODERATE
  else if (temperature < 40 && humidity < 85) {

    weatherStatus = "MODERATE";
    description = "Conditions Changing";

    digitalWrite(YELLOW_LED, HIGH);
  }

  // EXTREME
  else {

    weatherStatus = "EXTREME";
    description = "Dangerous Conditions";

    digitalWrite(RED_LED, HIGH);
    digitalWrite(BUZZER, HIGH);
  }
}

void handleRoot() {

  server.send(200, "text/plain", "ESP32 Weather Station Running");
}