# Device Operation

![UNDER CONSTRUCTION](./images/underconstruction.jpg)

The CDEM device is equipped with three status LEDs (power, comm and data) next to the RJ12 connector. These LEDs indicate what the device status is at all times and should provide the user some basic feedback.

<!-- TODO: Change image to all led's off  -->
![Status LEDs Off](./images/blank.png)

## Power

Once your CDEM device is powered the **POWER** led will light up blue. This led should be on during operation.

<!-- TODO: Change image to power led on  -->
![Power led on](./images/blank.png)

## Booting

Once your CDEM device is powered it will start **booting**.

If it's the first time you power your CDEM device the **COMM** and **DATA** led's will alternate indicating you need to configure your device using the configuration page (see [Configuring your CDEM](/05_configuration)).

<!-- TODO: Change image to alternating comm and data led's  -->
![Com data led alternating](./images/blank.png)

If a configuration already exists you still get the 5 minute window to acces the configuration page to make changes to your configuration.
In that case the **COMM** led will blink green.

<!-- TODO: Change image to comm led blinking  -->
![Comm led blinking](./images/blank.png)

## External communication

Once your CDEM device is boot your device will try to establish a wifi connection.
As long there is no wifi connection the **COMM* led will be off.

<!-- TODO: Change image to comm led off  -->
![Comm led off](./images/blank.png)

If a wifi connection has been established, the **COMM** led wil indicate that by flashing green.
Now your CDEM device will try to setup a broker connection.

<!-- TODO: Change image to comm led flashing  -->
![Comm led short flash](./images/blank.png)

Upon a succesfull wifi and broker connection the **COMM* led wil turn green.

<!-- TODO: Change image to comm led on  -->
![Comm led on](./images/blank.png)

## Internal communication

If the communication between your CDEM device and the Fluvius meter is operational the **DATA** led will light up orange.

Should there be a communication fault between your CDEM device and the Fluvius meter the **DATA** led will indicate that by blinking orange.
:::warning ✋ Communicationsjumper  
If the **DATA** led is blinking orange the first time you use your CDEM device, see if you have refitted the communicationsjumper.

<!-- TODO: Change image to communicationsjumper  -->
![Comm led on](./images/blank.png)
:::

## Your device at work

Once your device is operational it will periodically:

* read a datagram from the P1 port of your Fluvius Digital Meter
* validate the received datagram
* decode the datagram to a human readable format
* publish that human readable format to your MQTT broker

<!-- TODO: Change image to all led's on  -->
![All led's on](./images/blank.png)

## Your Data

Once the data has been published to your MQTT broker, it will be available in the topic you configured (default `iot/myhome/cdem`). Each data parameter will be published on a sub-topic of this parent topic as a simple floating point or integral value:

| Sub-topic | Value Type | Description | Unit |
| :---:     | :---:      | :---:       | :---: |
| `consumption_high_tarif` | Floating Point | Cumulated electricity consumption (high tariff) | kWh |
| `consumption_low_tarif` | Floating Point | Cumulated electricity consumption (low tariff) | kWh |
| `production_high_tarif` | Floating Point | Cumulated electricity production (high tariff) | kWh |
| `production_low_tarif` | Floating Point | Cumulated electricity production (low tariff) | kWh |
| `total_power_consumption` | Floating Point | Instantaneous consumption over all phases | kW |
| `total_power_production` | Floating Point | Instantaneous production over all phases  | kW |
| `actual_voltage_l1` | Floating Point | Instantaneous voltage L1 | V |
| `actual_voltage_l2` | Floating Point | Instantaneous voltage L2 | V |
| `actual_voltage_l3` | Floating Point | Instantaneous voltage L3 | V |
| `actual_current_l1` | Floating Point | Instantaneous current L1 | A |
| `actual_current_l2` | Floating Point | Instantaneous current L2 | A |
| `actual_current_l3` | Floating Point | Instantaneous current L3 | A |
| `l1_power_production` | Floating Point | Instantaneous active power production L1 | kW |
| `l2_power_production` | Floating Point | Instantaneous active power production L2 | kW |
| `l3_power_production` | Floating Point | Instantaneous active power production L3 | kW |
| `l1_power_consumption` | Floating Point | Instantaneous active power consumption L1 | kW |
| `l2_power_consumption` | Floating Point | Instantaneous active power consumption L2 | kW |
| `l3_power_consumption` | Floating Point | Instantaneous active power consumption L3 | kW |
| `actual_tarif` | Integral | Tariff indicator (1=high, 2=low) | |
| `gas_meter_m3` | Floating Point | Total gas consumption | m^3 |

::: tip Different Readout
Do note that not all parameters may be available for your setup in your case. If you do not have a digital gas-meter, that information will not be available. You may also see only a single phase output if your home only uses a single phase.
:::

An all-in-one JSON representation will also be published in the subtopic `payload`. Below is an example of a real-life setup:

```json
{
   "actual_current_l1": 3.6,
   "actual_tarif": 1,
   "actual_voltage_l1": 227.3,
   "consumption_high_tarif": 716.568,
   "consumption_low_tarif": 649.135,
   "gas_meter_m3": 961.33,
   "l1_power_consumption": 0,
   "l1_power_production": 0.765,
   "production_high_tarif": 224.063,
   "production_low_tarif": 112.645,
   "total_power_consumption": 0,
   "total_power_production": 0.765
}
```

This allows for much easier processing using a custom application or for example NodeRED.

Using a tool such as [MQTT Explorer](http://mqtt-explorer.com/), you can easily take a look at it and check if the data is coming trough.

![MQTT Explorer](./images/mqtt_explorer.png)


