FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

COPY . .

COPY prisma ./prisma/

RUN npm install

RUN npx prisma generate

RUN npm run build

EXPOSE 4000

CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]