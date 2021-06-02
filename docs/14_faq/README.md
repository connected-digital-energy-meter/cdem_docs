# Frequently Asked Questions

## Should I use a public MQTT broker?

It is adviced to keep all the information localy and not in the cloud because it's sensitive data that one could use to determine when nobody is at home. So we recommend not using a public MQTT broker.

## How can i use this device to save on my energy bill?

* For starters you can use the output of your production ( if you have solar pannels ) and your consumption of energy to detect when u use most energy and at what tarif you use it. If you can figure out what devices or actions cause that energy usage you can adjust your habits so u use energy when it is least expensive for you.
* If you have a domotics system you can automate the above and cut the power to certain appliance when the energy price is high and your production is low.

More info is provided in the chapter [Energy Efficiency](/12_energysavings).

## Troubleshooting

<!-- TODO: aanpassen aan de nieuwe versie van hardware/firmware -->

If your setup doesn't do the expeceted you can folow these problem detecting steps:

1. Are both led's on your CDEM both green? If not:
   
   - check the cable connecting your CDEM with your digital meter
   - check if you have a wifi connection
   - check if your mqtt broker is up and running

2. Is the data being published to your MQTT broker?

   - check with MQTT Explorer if the data is being published

3. Is your influxdb and grafana running?

   - check if your influxdb and grafana is up and running.

4. Are you connected to internet?

   - Check if you have internet connection in your network. If not, it is possible that your network is unable to reach a DNS server and therefore has trouble locating your devices.

## My CDEM is rebooting unexpectedly

When u notice that your CDEM is rebooting unexpectedly from time to time, then it may well be that the power supply of your Fluvius Meter is insufficient. We then advice you to use a external USB power supply to power your CDEM.

![IMAGE](./images/power_supply.jpg)

