up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs -f

prisma:
	docker-compose run app npx prisma generate

migrate:
	docker-compose run app npx prisma migrate dev

seed:
	docker-compose run app npx ts-node prisma/seed.ts
