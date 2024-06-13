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

## Seeders

**Users:**
<br>

| Email                  | Password | Role  |
|------------------------|----------|-------|
| admin@example.com      | admin    | ADMIN |
| antonlisovsky@gmail.com| admin    | ADMIN |


**Dishes:**
<br>

| Name         | Description  | Short Description | Recipe               | Ingredients               | Image URL                                                                                                           |
|--------------|--------------|-------------------|----------------------|---------------------------|---------------------------------------------------------------------------------------------------------------------|
| Burger       | Burger       | Burger            | Recipe for Burger    | Ingredients for Burger    | [Image](https://avatars.mds.yandex.net/i?id=4dd6be3717152abb3bd0f0347660062a7fff8710-12525791-images-thumbs&n=13)  |
| Sandwich     | Sandwich     | Sandwich          | Recipe for Sandwich  | Ingredients for Sandwich  | [Image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QiCmNEp3vF9Kw_QNe-Wv6-IH82nOSwBDMQ&usqp=CAU)       |
| French fries | French fries | French fries      | Recipe for French fries| Ingredients for French fries | [Image](https://klopotenko.com/wp-content/uploads/2021/04/Kartoshka-fri_siteWeb.jpg?v=1617290723)                  |
| Steak        | Steak        | Steak             | Recipe for Steak     | Ingredients for Steak     | [Image](https://halal-spb.ru/sites/default/files/styles/large/public/bd09da8cd90c4f5f8807f24785545d00.jpg?itok=KnyHC-n8) |


**Reservations:**
<br>

| Name        | Email              | Phone        | Date       | Time   | Guests |
|-------------|--------------------|--------------|------------|--------|--------|
| Test user 1 | testuser1@gmail.com| 88005553535  | 2024-07-13 | 19:00  | 2      |
| Test user 2 | testuser2@gmail.com| 88005553535  | 2024-08-13 | 18:30  | 4      |
| Test user 3 | testuser3@gmail.com| 88005553535  | 2024-09-13 | 20:00  | 3      |
| Test user 4 | testuser4@gmail.com| 88005553535  | 2024-10-13 | 19:30  | 5      |


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

## Swagger

URL:
<br>
```
localhost:4000/api/docs
```