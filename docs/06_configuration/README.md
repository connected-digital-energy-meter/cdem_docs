# Configuration

![UNDER CONSTRUCTION](./images/underconstruction.jpg)

Upon the first startup of the firmware the factory default settings are loaded and you automaticly are redirected to the configuration wizard. 
You can acces this via a serial communication software like [PuTTY](https://www.putty.org/) or the serial monitor of Arduino IDE. You just need to connect the ESP32 to your system with a USB cable.

## Configuration settings

* **Wifi SSID**: The SSID (Service Set IDentifier) of an accesspoint in your home-network that the kit can use to connect to the internet.

* **Wifi password**: The password to connect to that SSID.

* **Use DHCP or not**: If you use DHCP (Dynamic Host Configuration Protocol) the kit get's it's network settings automaticly from your router/switch. If you want to configure those settings yourself, don't use DHCP.

* **Static IP**: The IP adress you want your kit to use in your network. Check your network configuration before assigning this.

* **Subnet Mask**: The Subnet Mask you want your kit to use in your network. Check your network configuration before assigning this.

* **Default gateway**: The Default Gateway you want your kit to use in your network. Check your network configuration before assigning this.

* **MQTT broker IP-adress**: This is the IP-adress of the MQTT broker you have setup localy or in the cloud. 

* **MQTT broker port**: This is the port used to communicate with the MQTT broker. Usualy this is port 1883.

* **MQTT broker base topic**: Each data is published to a topic on the MQTT broker. Data from the same device usualy is combined in a base topic. The factory default for the base topic is `iot/myhome/cdem`.

* **Period**: The kit will periodicaly read the data from the P1 port and publish it to your MQTT broker. The lenght of that period [seconds] can be set with this configuration.

## Configuration wizard

First the Configuration wizard wil ask you for the Wifi SSID and password so it can connect to internet via your wifi.

Next you will be asked if you want to use dhcp or not. Depending on your answer, you will be asked for a static IP adress, subnet mask and default gateway for your network communication.

Once the internet communication is configured you will be asked for the MQTT broker IP-adress, port and base topic. So publishing to the MQQT broker is possible.

Finaly you will be asked for the period in second you want to read and publish the data.

You need to confirm and save these settings before you can use the kit.

## Boot menu 

If you want to go into the boot menu, just reset the device via the reset button or just interupt the power supply and then hold your finger to the VIVES logo on the pcb.

In the boot menu you can seperatly change the network/wifi settings, the MQTT settings and the meter settings or you can use the wizard. You also can return to the factory default settings.
You have the option to save or discard any changes made and leave this menu, the kit then boots with the new configuration.





