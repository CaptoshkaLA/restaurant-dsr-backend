# Restaurant DSR Backend

## Technologies

- **Node.js**
- **Express.js**
- **Prisma ORM**
- **PostgreSQL**
- **JWT**
- **Docker**
- **TypeScript**

## Project structure

Coming soon

## Start up

1) Launching the application container and database
```bash 
make up
```

2) Add admins 
```bash 
make seed
```

## Docker Hub Mirrors
Зеркала для доступа к Docker Hub 
<br>
с
**Settings -> Docker Engine -> Add "registry-mirrors" -> Apply & restart**
```
{
    "registry-mirrors": [ "https://mirror.gcr.io/", "https://dockerhub.timeweb.cloud/"]
}
```

## Postgres Error: Failed to bind tcp 0.0.0.0:5432 address already in use
Необходимо найти ```pid``` запущенного процесса:
```
sudo ss -lptn 'sport = :5432'
```
И дропнуть процесс с данным ```pid```:
```
kill <pid>
```