# Energy Efficiency

![UNDER CONSTRUCTION](./images/underconstruction.jpg)

Things become interesting when you use the information from the Fluvius Smart Meter combined with other information from your home or third party's in order to automate some of your energy usage. The main goal here will be to use the energy more effeciently.

## Smart plug

<!-- TODO: shelly plug info toevoegen -->

## Smart use of large energy consumers that are critical in use

It would be smart to use large energy consumers that are critical in use like a boiler, freezer, ... when the energy is available at the lowest cost. The ideal moment is the use these devices when you are injecting energy into the net, if this is not possible then the next best thing is in low tarif.

One could set the following rules (example for a boiler):

![IMAGE](./images/afbeelding1.png)

@t1:
* Use a the weather prediction or solar forcast (see further in this chapter) to figure out if you can expect solar energy producton or not.
* If you can't expect much solar energy production you switch on the boiler on.

@t2:
* If the boiler wasn't active @t1 then switch it on.

To determine the t1 and t2 timestamps the boiler follow these instructions:
1. Wait until the start of low tariff and then unplug your boiler.
2. 24 hours later plug in your boiler and measure the amount of energy (P) needed to heat the water and the duration (t).
3. Now you calculate the t1 time like this t1 = end low tariff – (t + 0,5 hours)
4. Now you calculate the t2 time like this t2 = middle production time – (t/2 + 0,25 hours)

## Smart use of large energy consumers that are non-critical in use

Non-critical appliances like a diswasher, washing machine, ... should only be used when more then the needed energy for that devices is being injected into the net.

One could set the following rule:

@any given time:
* If the energy being injected into the net is larger then the needed energy for the appliance to run and the time < sunset – time needed for the appliance to run then switch the power plug for that device on and indicate on the dashboard that you can safely use that appliance.
* If your electric car is charging consider that amount of energy available. 

:::tip Note
You can use your electric car as buffer. If energy is being injected into the net, then use that energy in stead to charge your car. If a other non-critical device is started then stop charging your car unless there is still enough energy left to do that.
:::

<!-- TODO: solar forcast toevoegen -->

