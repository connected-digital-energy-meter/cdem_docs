# Hardware

This chapter contains order and development information for the hardware of the Connected Digital Energy Meter device.

![IMAGE](./images/pcb.jpg)

## CDEM pcb

We have developed a pcb to read the P1 port of the digital meter and send that information to a MQTT broker. Due to the number of small components we advice you to order a assembled pcb then rather solder it yourself.

### Ordering files

When ordering your pcb you will need to upload the following information:

* Gerber files : [Github](https://github.com/connected-digital-energy-meter/cdem-hardware/tree/master/gerber)
* Bill of Material : [Github](https://github.com/connected-digital-energy-meter/cdem-hardware/tree/master/assembly) 

### Suppliers

We can advice the following suppliers :

* [JLCPCB](https://jlcpcb.com/)
<figure class="video_container">
  <iframe src="https://jlcpcb.com/video/place.v2.mp4" frameborder="0" allowfullscreen="true"> </iframe>
</figure>
* [ALLPCB](https://www.allpcb.com/)
* [PCBWay](https://www.pcbway.com/)

## RJ12 cable 

Connecting the Connected Digital Energy Meter to the Fluvius Digital meter requires an RJ12 cable with 6 internal wires. 

![RJ12 Cable](./images/rj12_cable.jpg)

When ordering cables one of the cheapest distributors with the wides range of products is [AlleKabels](https://www.allekabels.nl/rj12-kabel/7400/1181351/telefoonkabel-rj12.html). You can choose the length acording to your setup.

::: warning 🕵️ Check Connections
Make sure that the RJ12 cable has 6 wires and that both sides have the wires in the same order.
:::

## Box

To safely take your Connected Digital Enery Meter in operation we recommend putting it into a casing.
We use the [1591XXM from HAMMOND](http://www.hammondmfg.com/pdf/1591XXM.pdf).

![IMAGE](./images/box.jpg)

You can order the casing we used on [Conrad](https://www.conrad.be/p/hammond-electronics-1591xxmsbk-1591xxmsbk-universele-behuizing-85-x-56-x-25-abs-zwart-1-stuks-485622).

You will need to make a small adjustment to the box, a small opening in the box for the RJ12 connector. You can do this with a small saw or cutter.