FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY prisma ./prisma/

RUN npx prisma generate

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app .

RUN npm install --production

EXPOSE 4000

CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]