# Software for the communication module

The general idea for the software is to build a program that periodically retrieves the P1 data and sends it to a MQTT broker.

## General settings

First we build a `settings.h` file with all general constants and variables. 

1. The Wifi credentials

```c++
#define WIFI_SSID "<YOUR WIFI SSID>"
#define WIFI_PASSWORD "YOUR WIFI PASSWORD"
```

2. The MQTT broker credentials

```c++
#define MQTT_HOST "<IP-ADRESS OF YOUR BROKER>"
#define MQTT_PORT 1883
```
3. The MQTT topics

We define some shorthands for the MQTT topics.

```c++
#define MQTT_C_L_TARIF "sensors/smartmeter/consumption_low_tarif"
#define MQTT_C_H_TARIF "sensors/smartmeter/consumption_high_tarif"
#define MQTT_P_L_TARIF "sensors/smartmeter/production_low_tarif"
#define MQTT_P_H_TARIF "sensors/smartmeter/production_high_tarif"
#define MQTT_C_T_POWER "sensors/smartmeter/total_power_consumption"
#define MQTT_P_T_POWER "sensors/smartmeter/total_power_production"
#define MQTT_A_TARIF   "sensors/smartmeter/actual_tarif"
#define MQTT_C_GAS     "sensors/smartmeter/gas_meter_m3"
#define MQTT_C_WATER   "sensors/smartmeter/water_meter_m3"
```
4. Setting the baudrate and port for communications

We use 2 serial communications, one for the P1 data and the other for debugging on the serial monitor.

```c++
#define SERIAL_DEBUG_BAUDRATE 115200
#define METER_BAUDRATE 115200
#define SerialDebug Serial
#define SerialMeter Serial1
```
5. Setting the output pins

We use the onboard led (on port 13) to indicate a datarequest.

```c++
const int STATE_LED = 13;
const int REQUEST_PIN = 14;
```
6. Defining a state class

We use a class to keep track of the state the communication module is in.

```c++
enum class State {
  IDLE,
  READING_DATAGRAM,
  DATAGRAM_READY,
  PROCESSING_DATA_GRAM,
  DATAGRAM_DECODED
};
```

7. Defining a buffer to store incomming data

```c++
char datagramBuffer[1024] = { 0 };
```

8. Defining and setting a readingpointer and startdetection.

We need a indicator (pointer) to know what character we are reading in the buffer and a boolean that can be set true if the start of the telegram was detected.

```c++
unsigned int readPointer = 0;
bool startDetected = false;
```

9. We define some variables to store the incoming data

```c++
double CONSUMPTION_LOW_TARIF;
double CONSUMPTION_HIGH_TARIF;
double PRODUCTION_LOW_TARIF;
double PRODUCTION_HIGH_TARIF;
double TOTAL_POWER_CONSUMPTION;
double TOTAL_POWER_PRODUCTION;
double GAS_METER_M3;
double WATER_METER_M3;
double ACTUAL_TARIF;
```

10. We define some variables for the periodic measurement

```c++
const long    period = 60000; // adjust this value to set the period
unsigned long startMillis;            
unsigned long currentMillis;
```
## The main program

Now we write the general program named `FluviusSmart_FeatherReader_MQTT.ino`.

### General initialisation of the program

First we need to include some libraries and initiate some variables.

```c++
// Include general libraries
#include <cstring>
#include <WiFi.h>
#include <AsyncMqttClient.h>

// Include custom libraries
#include "settings.h"

// Initiate MQTT client
AsyncMqttClient mqttClient;
TimerHandle_t mqttReconnectTimer;
TimerHandle_t wifiReconnectTimer;

// Declare State and set state to IDLE
State currentState = State::IDLE;
```
### Wifi and MQTT connections

Next we need to write some methodes that handle the WiFi and MQTT connections.

```c++
// Connect to WiFi
void connectToWifi() {
  Serial.println("Connecting to WiFi...");
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
}

// Connect to MQTT broker
void connectToMqtt() {
  Serial.println("Connecting to MQTT...");
  mqttClient.connect();
}

// Handle WiFi events
void WiFiEvent(WiFiEvent_t event) {
  switch(event) {
    case SYSTEM_EVENT_STA_GOT_IP:
      Serial.println("WiFi connected");
      Serial.println("IP address: ");
      Serial.println(WiFi.localIP());
      connectToMqtt();
      break;
    case SYSTEM_EVENT_STA_DISCONNECTED:
      Serial.println("WiFi lost connection");
      xTimerStop(mqttReconnectTimer, 0); // ensure we don't reconnect to MQTT while reconnecting to Wi-Fi
      xTimerStart(wifiReconnectTimer, 0);
      break;
  }
}

// On succesfull MQTT connection
void onMqttConnect(bool sessionPresent) {
  Serial.println("Connected to MQTT.");
  Serial.print("Session present: ");
  Serial.println(sessionPresent);
}

// On disconection from MQTT
void onMqttDisconnect(AsyncMqttClientDisconnectReason reason) {
  Serial.println("Disconnected from MQTT.");
  if (WiFi.isConnected()) {
    xTimerStart(mqttReconnectTimer, 0);
  }
}
```

### Enable and disable communication with the P1 port

Now we write 2 methodes to enable of disable the P1 communication.

```c++
// Enable the meter sending
void enable_meter(void) {
  digitalWrite(REQUEST_PIN, HIGH);
}

// Disable the meter sending
void disable_meter(void) {
  digitalWrite(REQUEST_PIN, LOW);
}
```

### Building the setup of your program

Now we are ready to write the setup for our program:
1. We define communication bautrate
2. We set output pins
3. We disable the P1 communication
4. We setup Wifi and MQTT
5. We start the timer for the periodic measurement

```c++
void setup() {
  
  // Set the bautrate for both serial connections
  SerialDebug.begin(SERIAL_DEBUG_BAUDRATE);
  SerialMeter.begin(METER_BAUDRATE);

  // Pin Setup
  pinMode(STATE_LED, OUTPUT);
  pinMode(REQUEST_PIN, OUTPUT);

  // Clear outputs
  digitalWrite(STATE_LED, LOW);
  disable_meter();

  // Setup timers for WiFi and MQTT
  mqttReconnectTimer = xTimerCreate("mqttTimer", pdMS_TO_TICKS(2000), pdFALSE, (void*)0, reinterpret_cast<TimerCallbackFunction_t>(connectToMqtt));
  wifiReconnectTimer = xTimerCreate("wifiTimer", pdMS_TO_TICKS(2000), pdFALSE, (void*)0, reinterpret_cast<TimerCallbackFunction_t>(connectToWifi));

  // Setup eventhandler WiFi
  WiFi.onEvent(WiFiEvent);

  // Setup Eventhandlers MQTT
  mqttClient.onConnect(onMqttConnect);
  mqttClient.onDisconnect(onMqttDisconnect);
  //mqttClient.onPublish(onMqttPublish);
  
  // Setup MQTT serverinfo
  mqttClient.setServer(MQTT_HOST, MQTT_PORT);
  // If your broker requires authentication (username and password), set them below
  //mqttClient.setCredentials("REPlACE_WITH_YOUR_USER", "REPLACE_WITH_YOUR_PASSWORD");

  // Make Wifi Connection
  connectToWifi();

  // Wait until ESP is ready to receive info
  while ((!SerialDebug) && (millis() < 10000)) { }
  SerialDebug.println("Starting Feather Fluvius Meter Reader firmware ...");

  // Start time for period
  startMillis = millis();
}
```

### Reading the datagram 

Before we build the loop we now have to write some methodes. We start with a methode for reading the datagram of the P1 port.

```c++
// Read the next byte of the telegram
void read_datagram(void) {
  if (SerialMeter.available() > 0) {
    char incomingByte = SerialMeter.read();
    // Look for the start of the datagram
    if (!startDetected && incomingByte == '/') {
      startDetected = true;
      SerialDebug.println("Detected start of a datagram");
    }

    // Ignore all data on serial port if start was not detected
    if (startDetected) {
      datagramBuffer[readPointer++] = incomingByte;

      // Send incoming bytes to the serial monitor for debugging.
      SerialDebug.print(incomingByte);

      // Look for the end of the datagram
      if (incomingByte == '\n' && datagramBuffer[readPointer-7] == '!') {
        SerialDebug.println("Read in full datagram");
        currentState = State::DATAGRAM_READY;
        readPointer=0;
        startDetected=false;
      }
      // End of datagram not found
      if (readPointer>1024) {
        SerialDebug.println("Invalid Datagram > No end detected");
        currentState = State::IDLE;
        readPointer=0;
        startDetected=false;
      }
    }
  }
}
```

### Decoding the datagram

Next we write a function that decodes the datagram into values by the OBIS reference and returns `true` if the datagram was valid and `false` if it was not.

```c++
// Decode the telegram
bool decode_datagram()
{
    // Find the start of the datagram
    char* startChar = strstr(datagramBuffer, "/");

    // Find the end of the datagram
    char* endChar = strstr(datagramBuffer, "!");
    
    // If the end or start are not found we have a invalid datagram
    if(!startChar || !endChar) {
        Serial.println("Invalid datagram");
        return false;
    } 

    // 1-0:1.8.2 = OBIS reference for electricity delivered to client in low tariff
    CONSUMPTION_LOW_TARIF = ParseDataValue("1-0:1.8.2",1);
    
    // 1-0:1.8.1 = OBIS reference for electricity delivered to client in high tariff
    CONSUMPTION_HIGH_TARIF = ParseDataValue("1-0:1.8.1",1);

    // 1-0:2.8.2 = OBIS reference for electricity delivered by client in low tariff
    PRODUCTION_LOW_TARIF = ParseDataValue("1-0:2.8.2",1);

    // 1-0:2.8.1 = OBIS reference for electricity delivered by client in high tariff
    PRODUCTION_HIGH_TARIF = ParseDataValue("1-0:2.8.1",1);
    
    // 1-0:1.7.0 = OBIS reference actual total power delivered to client
    TOTAL_POWER_CONSUMPTION = ParseDataValue("1-0:1.7.0",1);

    // 1-0:2.7.0 = OBIS reference actual total power delivered by client
    TOTAL_POWER_PRODUCTION = ParseDataValue("1-0:2.7.0",1);

    // 0-0:96.14.0 = OBIS reference actual tariff
    ACTUAL_TARIF = ParseDataValue("0-0:96.14.0",1);
    
    // 0-1:24.2.3 = OBIS reference gas delivered to client with temperature correction , 0-n where the n is the device number, possibly you need to change this number for your configuration
    GAS_METER_M3 = ParseDataValue("0-1:24.2.3",2);

    // 0-2:24.2.1 = OBIS reference water delivered to client, 0-n where the n is the device number, possibly you need to change this number for your configuration
    WATER_METER_M3 = ParseDataValue("0-2:24.2.1",2);
    return true;
}
```

### Parsing the value of a single OBIS reference

Then we write a function that parses the value of a single OBIS reference from the datagram and return it.

```c++
// Parse value of single OBIS reference
double ParseDataValue(char* key, int datablock)
{
    // look for the OBIS reference
    char* position = strstr(datagramBuffer, key);

    // if OBIS reference found
    if (position)
    {
        // look for the start position of the value for this OBIS reference
        char* start = position + strlen(key)+1;

        // if there are two value blocks then look for the start of the second one
        if(datablock==2){
          char* start = strchr(start,'(')+1;  
        }

        // look for the end position of the value for this OBIS reference
        char* end = strchr(start,'*')-1;

        // get the value of the OBIS reference
        char buffer[64] = {0};
        strncpy(buffer,start,end-start+1);

        // return the value
        return atof(buffer);
    } else {
      // return invalid if OBIS reference not found
      return -1;
    }
}
```

### Publising to the MQTT broker

Finaly we write a methode that publishes the recieved values to the MQTT broker.

```c++
// Publish received data to MQTT
void publish_received_data(){
   uint16_t packetIdPub1 = mqttClient.publish(MQTT_C_L_TARIF, 1, true, String(CONSUMPTION_LOW_TARIF).c_str());                            
   uint16_t packetIdPub2 = mqttClient.publish(MQTT_C_H_TARIF, 1, true, String(CONSUMPTION_HIGH_TARIF).c_str());                            
   uint16_t packetIdPub3 = mqttClient.publish(MQTT_P_L_TARIF, 1, true, String(PRODUCTION_LOW_TARIF).c_str());                            
   uint16_t packetIdPub4 = mqttClient.publish(MQTT_P_H_TARIF, 1, true, String(PRODUCTION_HIGH_TARIF).c_str());                            
   uint16_t packetIdPub5 = mqttClient.publish(MQTT_C_T_POWER, 1, true, String(TOTAL_POWER_CONSUMPTION).c_str());
   uint16_t packetIdPub9 = mqttClient.publish(MQTT_P_T_POWER, 1, true, String(TOTAL_POWER_PRODUCTION).c_str());
   uint16_t packetIdPub13 = mqttClient.publish(MQTT_A_TARIF, 1, true, String(ACTUAL_TARIF).c_str());                            
   uint16_t packetIdPub14 = mqttClient.publish(MQTT_C_GAS, 1, true, String(GAS_METER_M3).c_str());                            
   uint16_t packetIdPub15 = mqttClient.publish(MQTT_C_WATER, 1, true, String(WATER_METER_M3).c_str());
   Serial.println("Published to MQTT");          
}
```

### The loop

Now we build the loop and use the state of the IoT-device as a guide for the programming.

```c++
void loop() {

  // Current time for period
  currentMillis = millis();
    
  if((currentMillis - startMillis) >= period){
    if ((currentState == State::IDLE)) {
      
      // Request data
      digitalWrite(STATE_LED, LOW);
      SerialDebug.println("Enabling meter");
      enable_meter();    
      currentState = State::READING_DATAGRAM;

    } else if (currentState == State::READING_DATAGRAM) {
      
      // Read data
      read_datagram();    

    } else if (currentState == State::DATAGRAM_READY) {
      
      // Stop requesting data
      digitalWrite(STATE_LED, HIGH);
      SerialDebug.println("We have a DATAGRAM ready for processing");
      disable_meter();
      currentState = State::PROCESSING_DATA_GRAM;
    } else if (currentState == State::PROCESSING_DATA_GRAM){  
      
      // Decode data
      if(decode_datagram()){
        currentState = State::DATAGRAM_DECODED;
      } else {
        // Reset to the IDLE state if datagram is invalid
        currentState = State::IDLE;
      }
    } else if (currentState == State::DATAGRAM_DECODED){  
      // Publish data to MQTT
      publish_received_data();
      
      // Ready for next request    
      currentState = State::IDLE;
      digitalWrite(STATE_LED, LOW);
      
      // reset timer
      startMillis = currentMillis;
    }
  }
}
```

## Download the project

You can download the [projectfiles](/files/project.zip) and adjust for your WiFi and MQTT broker settings.

