# Frequently Asked Questions

<!-- ---------------------------------------------------------- -->

::: details Should I use a public MQTT broker?
It is our personal opinion that it is **better practice to keep the MQTT data local instead of in the cloud**. It's sensitive data that one could use to determine when nobody is at home. So we recommend not using a public MQTT broker.
:::

<!-- ---------------------------------------------------------- -->

::: details How can I use this device to save on my energy bill?
* For starters you can use the output of your production (if you have solar pannels) and your consumption of energy to detect when you use most energy and at what tarif you are consuming energy. If you can figure out what devices or actions cause that energy usage you can adjust your habits so you use energy when it is least expensive for you.
* If you have a domotics system you can automate the above and cut the power to certain appliance when the energy price is high and your production is low.

More info is provided in the chapter [Energy Efficiency](/12_energysavings).
:::

<!-- ---------------------------------------------------------- -->

::: details Why is my CDEM rebooting unexpectedly?
When you notice that your CDEM device is rebooting unexpectedly from time to time, then it may well be that the **power supply of your Fluvius Meter is insufficient**. In this case we advice to use an external USB power supply (such as a smartphone adapter) to power your CDEM device.

![IMAGE](./images/power_supply.jpg)
:::

<!-- ---------------------------------------------------------- -->

::: details Why does the DATA led keep blinking orange?
When the DATA led keeps blinking orange there is a problem with the communication between your CDEM device and the Fluvius Meter. This can have several causes:

1. **The Fluvius user ports are not activated (anymore).** If this is a fresh setup you may need to wait a few days longer for the ports to become active. If this was a functioning setup, you need to check the activation status of the user ports on the digital meter. There should be a small arrow above the `GP`. If not please re-activate the user ports. Check the [Activating the Fluvius Meter Port](/06_connect/#activating-the-fluvius-meter-port) section for more information.

![Active User Ports](./images/active_user_ports.png)

2. **The RJ12 cable is faulty** and may need to be replaced.
3. **The program jumper is not placed (correctly)** on your CDEM device. Checkout the [Compile and Configure the Firmware](/03_firmware/#compile-and-upload-the-firmware) section for more information.
:::

<!-- ---------------------------------------------------------- -->

::: details Why am I getting errors when I'm trying to upload the firmware?
Make sure to check the following things when uploading the firmware to the CDEM device:

1. Is the device connected via USB-C to your computer?
2. Have you selected the correct COM-port in Arduino IDE?
3. Is the jumper placed in the program position? Checkout the [Compile and Configure the Firmware](/03_firmware/#compile-and-upload-the-firmware) section for more information.

![Program Jumper](./images/jumper_program.png)

:::

<!-- ---------------------------------------------------------- -->

::: details Can I see if my user ports are activated?
Yes you can. Go to Fluvius digital meter and hit the lime green user button once. The display should become lit. A small arrow should be placed above `GP`. If not, than your user ports are not activated.

![Active User Ports](./images/active_user_ports.png)
:::

<!-- ---------------------------------------------------------- -->

::: details Why are the timeouts increasing?
If the timeouts counter in the `stats` topic is increasing, there might be a problem with the readout of the meter. This can have several causes:

1. **The Fluvius user ports are not activated (anymore).** If this is a fresh setup you may need to wait a few days longer for the ports to become active. If this was a functioning setup, you need to check the activation status of the user ports on the digital meter. There should be a small arrow above the `GP`. If not please re-activate the user ports. Check the [Activating the Fluvius Meter Port](/06_connect/#activating-the-fluvius-meter-port) section for more information.

![Active User Ports](./images/active_user_ports.png)

2. **The RJ12 cable might be faulty** and may need to be replaced.
3. **Is the jumper placed in the meter position**  on your CDEM device?

![Meter Jumper](./images/jumper_meter.png)

:::

<!-- ---------------------------------------------------------- -->

::: details Config page cannot be reached
If you get an error similar to `This site can't be reached` when trying to load the config page. Than check the following things:

* Is the COMM LED slowly blinking ? If not then the captive portal is not active. Reboot the device by unplugging it and plugging it back in.
* Are you connected to the CDEM-Config access point ? If not, then first connect to it.
* Did you disable your data-connection on your smartphone? If not, please do so.
* You may get this error if you are surfing to a URL that you have visited some time ago. Your smartphone is using it's DNS cache to resolve the URL. Try using another URL like for example [config.cdem.be](http://config.cdem.be).
:::

<!-- TODO - Redirect to correct sections -->

<!-- ---------------------------------------------------------- -->

::: details The device is not booting when attached to the meter
If the device works fine when attached to the computer but it is not booting when connected to the meter, there might be several causes:

1. Your cable is faulty or is actually an RJ11. Make sure the cable is ok and has 6 wires (RJ12) on both sides of the connector.
2. Your device may request more power than the meter can provide. This may happen when your WiFi access point is far away from the device. It may be necessary to add an external USB-C power adapter to the device (any smartphone adapter should be ok).
:::
