# Troubleshooting

TODO - Work in Progress

Reading the debug messages



::: details General troubleshooting
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
:::
