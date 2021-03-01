# Docker Compose

TODO

```yaml
version: "3.7"

services:

  influxdb:
    environment:
      INFLUXDB_DB: home
      INFLUXDB_ADMIN_USER: admin
      INFLUXDB_ADMIN_PASSWORD: xxxxxxxxx
      INFLUXDB_USER: grafana
      INFLUXDB_USER_PASSWORD: xxxxxxxxxxxxxx
    image: influxdb:1.8.4
    restart: unless-stopped
    networks:
      - backend
    volumes:
      - influxdb:/var/lib/influxdb

  grafana:
    image: grafana/grafana:7.4.1
    restart: unless-stopped
    ports:
      - "3000:3000"
    depends_on:
      - influxdb
    networks:
      - backend
    volumes:
      - grafana-storage:/var/lib/grafana

  nodered:
    image: nodered/node-red:1.2.9
    restart: unless-stopped
    ports:
      - "1880:1880"
    depends_on:
      - influxdb
    networks:
      - backend
    volumes:
      - nodered-storage:/data

volumes:
  grafana-storage:
  influxdb:
  nodered-storage:

networks:
  backend:
```
