/*
 Smart Fire Detection & Alert System

 Hardware:
 Arduino Uno
 TMP36 Temperature Sensor
 Red LED
 Green LED
 Buzzer
*/

#define TEMP_SENSOR A0
#define GREEN_LED 8
#define RED_LED 9
#define BUZZER 10


float temperature = 0;


void setup()
{
  pinMode(GREEN_LED, OUTPUT);
  pinMode(RED_LED, OUTPUT);
  pinMode(BUZZER, OUTPUT);

  Serial.begin(9600);

  Serial.println("Fire Detection System Started");
}


void loop()
{
  int sensorValue = analogRead(TEMP_SENSOR);


  float voltage = sensorValue * (5.0 / 1023.0);


  temperature = (voltage - 0.5) * 100;


  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println(" C");


  if(temperature >= 50)
  {
    digitalWrite(RED_LED, HIGH);
    digitalWrite(GREEN_LED, LOW);

    tone(BUZZER,1000);

    Serial.println("ALERT: Fire Risk Detected!");
  }
  else
  {
    digitalWrite(GREEN_LED,HIGH);
    digitalWrite(RED_LED,LOW);

    noTone(BUZZER);

    Serial.println("Status: Safe");
  }


  delay(1000);
}