FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npx prisma generate

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "start"]
