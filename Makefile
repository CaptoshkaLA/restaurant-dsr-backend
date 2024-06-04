up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs -f

prisma:
	docker-compose exec app npx prisma generate

migrate:
	docker-compose exec app npx prisma migrate dev

seed:
	docker-compose exec app npx ts-node prisma/seed.ts
