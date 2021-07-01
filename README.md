# Go Barber

After clone this repository, install the dependencies:

```
yarn install
```

## Docker for Postgres database

```
# up docker
docker compose up -d

# create tables
yarn dev:typeorm migration:run

# stop database
docker compose stop
```

To run the project:

```
yarn dev:server
```

Open your browser in `http://localhost:3333`
