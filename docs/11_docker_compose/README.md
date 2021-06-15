# Docker Compose

Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. 

Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels.

Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

To learn more about all the features of Compose, [checkout their documentation](https://docs.docker.com/compose/).

## Full Setup

If you have a usable docker/compose environment, you can use the full setup to experiment with the CDEM system. Using this approach will allow you to setup all the required components for your CDEM processing, including:

* An MQTT Broker
* NodeRED
* Grafana
* InfluxDB
* *Home-Assistant - Not yet implemented*
* *OpenHAB - Not yet implemented*

The docker-compose setup can be found at [https://github.com/connected-digital-energy-meter/cdem-docker-compose](https://github.com/connected-digital-energy-meter/cdem-docker-compose). It features a single-command setup with full provisioning of the system and dashboards.

This setup is still experimental and should probable only be used by those who know their way around docker.
