# Installing the firmware

![UNDER CONSTRUCTION](./images/underconstruction.jpg)

## Install and setup Arduino Ide

### Arduino IDE

In order to install the firmware on your ESP32 you need to install and get familiar with Arduino IDE.
Please check [the website of Arduino](https://www.arduino.cc/en/Guide) for more information on that.

### Arduino core for the ESP32

1. download [ESP32 by Espressif Systems](https://github.com/espressif/arduino-esp32#using-through-arduino-ide) (the firmware is tested with v1.0.4)
2. open Boards Manager from `Tools => Board` menu and install `esp32 by Espressif Systems` platform. 
3. next select `Adafruit ESP32 Feather` board from `Tools => Board => ESP32 Arduino` menu after installation

### Async MQTT client library

Download [the library](https://github.com/marvinroger/async-mqtt-client) as a zip file and include it as such or clone the repo in the directory `Arduino/libraries` which can be found under your user profile.

This library has [the following dependency](https://github.com/me-no-dev/AsyncTCP), install it the same way.

## Download the firmware

Now that your Arduino IDE is ready to compile and upload the firmware it's time to download it.

You can download the latest version [here](https://github.com/pwo-iot-opportunities/smartmeter_featherfirmware/releases).

## Compile and upload the firmware

Now open the firmware in Arduino IDE and connect your ESP32 via USB. Select the correct `COM-port` and compile and upload the firmware to the ESP32.

:::tip Note
Keep the ESP32 connected and Arduino IDE running for a quick configuration of your firmware.
:::
