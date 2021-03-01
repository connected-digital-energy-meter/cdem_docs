# Device Operation

![UNDER CONSTRUCTION](./images/underconstruction.jpg)

Once your Digital Energy Meter device is powered it will start booting.

## Indicator led's

There are two indicator led's that tell you the status of your Digital Energy Meter device.

### Communication led

<!-- TODO - place here animated gif's to explain the device status indication with the COM led's. -->

### Data led

<!-- TODO - place here animated gif's to explain the device status indication with the DATA led's. -->

## Your device at work

Once your device has WiFi connection and is connected to your MQTT broker it will periodically:
* read a datagram from the P1 port of your Fluvius Digital Meter
* validate the received datagram
* decode the datagram to actual data
* publish that data to your MQTT broker

## Resetting your device

In the unfortunate case the firmware of your Digital Energy Meter device  crashes or gets stuck, you can reset your device.
Place a thin but not sharp pin into the hole just beneath the VIVES logo and press gently.

Your device wil reboot.

Of course you can also interrupt the USB power supply to do this.




