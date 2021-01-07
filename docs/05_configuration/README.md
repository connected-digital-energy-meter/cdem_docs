# Configuration

Upon the first startup of the firmware the factory default settings are loaded and you automaticly are redirected to the configuration wizard. 
You can acces this via a serial communication software like [PuTTY](https://www.putty.org/). You just need to connect the ESP32 to your system with a USB cable.

## Configuration settings

**uitleg verschillende instellingen**

## Configuration wizard

First the Configuration wizard wil ask you for the Wifi SSID and password so it can connect to internet via your wifi.
Next you will be asked if you want to use dhcp or not.
Depending on your answer, you will be asked for a static IP adress, subnet mask and default gateway for your network communication.

Once the internet communication is configures you will be asked for the MQTT broker IP-adress, port and base topic. So publishing to the MQQT broker is possible.

Finaly you will be asked for the period in second you want to read and publish the data.

## Boot menu 

If you want to go into the boot menu, just reset the device via the reset button or just interupt the power supply and then hold your finger to the VIVES logo on the pcb.

**hier komt de uitleg omtrent het bootmenu**




