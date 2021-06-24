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
3. Have you removed the program jumper from the CDEM device?

<!-- TODO: Add image of removed program jumper here. -->
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

2. **The RJ12 cable is faulty** and may need to be replaced.
3. **The program jumper is not placed (correctly)** on your CDEM device. Checkout the [Compile and Configure the Firmware](/03_firmware/#compile-and-upload-the-firmware) section for more information.
:::

<!-- ---------------------------------------------------------- -->
