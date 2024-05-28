FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "start"]
