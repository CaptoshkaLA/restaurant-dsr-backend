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
<br>
**Settings -> Docker Engine -> Add "registry-mirrors" -> Apply & restart**
```
{
    "registry-mirrors": [ "https://mirror.gcr.io/", "https://dockerhub.timeweb.cloud/"]
}
```