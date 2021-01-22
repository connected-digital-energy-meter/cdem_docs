# Using the output

![UNDER CONSTRUCTION](./images/underconstruction.jpg)

The firmware publishes your data to a MQTT broker. In order to use it, you still need to integrate that information into your dashboard or domotica system.
We provide some examples to get you started with that.

## Node-red example

Here is a [example](/files/example.json) of a dashboard build in Node-red.
Node-red doesn't keep history, so when exiting Node-red you loose all data history.

![Image](./images/afbeelding1.png)

# Home assistant example

The first thing you need to do is add your mqtt broker to the `configuration.yaml` file:

```yaml
mqtt:
  broker: 192.168.0.1  #change this to your mqtt broker ip adress
  port: 1883           #this is the default port for mqtt
```
Now you will need to add the sensors from your mqtt broker.
For example for the consumption at low tarif this would look like:
```yaml
- platform: mqtt
  name: "Consumption low tarif"
  unit_of_measurement: 'kWh'
  state_topic: "sensors/smartmeter/consumption_low_tarif" #change sensors/smartmeter to your basetopic
  unique_id: "consumption_low_tarif"
  value_template: "{{ value|float  }}"
```

You can use [mqtt explorer](http://mqtt-explorer.com/) to see what sensors are available on the mqtt broker.

If you would like create a sensor that indicates if you are using from the net or injecting into the net you could write something like this:

```yaml
- platform: template
  sensors:
    sum_energy:
      value_template: "{{ (states('sensor.total_power_consumption') | float) - (states('sensor.total_power_production') | float) }}"
      unit_of_measurement: kWh
      device_class: power
```

<!-- TODO - Place here the example for Home assistant. -->


