//==============================================

// Smart Gas Leakage Detection System

//==============================================



const int GAS_SENSOR = A0;



const int GREEN_LED = 8;

const int YELLOW_LED = 9;

const int RED_LED = 10;



const int BUZZER = 11;



int gasValue = 0;



void setup() {



  pinMode(GREEN_LED, OUTPUT);

  pinMode(YELLOW_LED, OUTPUT);

  pinMode(RED_LED, OUTPUT);



  pinMode(BUZZER, OUTPUT);



  Serial.begin(9600);



  Serial.println("====================================");

  Serial.println(" Smart Gas Leakage Detection");

  Serial.println("====================================");

}



void loop() {



  gasValue = analogRead(GAS_SENSOR);



  Serial.print("Gas Level : ");

  Serial.println(gasValue);



  if (gasValue < 300) {



    digitalWrite(GREEN_LED, HIGH);

    digitalWrite(YELLOW_LED, LOW);

    digitalWrite(RED_LED, LOW);



    noTone(BUZZER);



    Serial.println("Status : SAFE");



  }

  else if (gasValue < 650) {



    digitalWrite(GREEN_LED, LOW);

    digitalWrite(YELLOW_LED, HIGH);

    digitalWrite(RED_LED, LOW);



    tone(BUZZER, 1000);

    delay(200);

    noTone(BUZZER);



    Serial.println("Status : WARNING");



  }

  else {



    digitalWrite(GREEN_LED, LOW);

    digitalWrite(YELLOW_LED, LOW);

    digitalWrite(RED_LED, HIGH);



    tone(BUZZER, 2000);



    Serial.println("Status : DANGER");

  }



  Serial.println("------------------------------------");



  delay(1000);

}