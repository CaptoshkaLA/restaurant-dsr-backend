import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();
/*
Убрал bcrypt, т.к. при хешировании пароля падала ошибка: Segmentation fault
Переделал под хеширование пароля вручную
 */

async function main() {
  let hashedPassword = crypto.createHash('sha256').update('admin').digest('hex');

  await prisma.user.createMany({
    data: [
      { email: 'admin@example.com', password: hashedPassword, role: 'ADMIN' },
      { email: 'antonlisovsky@gmail.com', password: hashedPassword, role: 'ADMIN' },
    ],
  });

  await prisma.dish.createMany({
    data: [
      { name: 'Burger', description: 'Burger', shortDescription: 'Burger', recipe: 'Recipe for Burger', ingredients: 'Ingredients for Burger', imageUrl: 'https://avatars.mds.yandex.net/i?id=4dd6be3717152abb3bd0f0347660062a7fff8710-12525791-images-thumbs&n=13' },
      { name: 'Sandwitch', description: 'Sandwitch', shortDescription: 'Sandwitch', recipe: 'Recipe for Sandwitch', ingredients: 'Ingredients for Sandwitch', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QiCmNEp3vF9Kw_QNe-Wv6-IH82nOSwBDMQ&usqp=CAU' },
      { name: 'French fries', description: 'French fries', shortDescription: 'French fries', recipe: 'Recipe for French fries', ingredients: 'Ingredients for French fries', imageUrl: 'https://klopotenko.com/wp-content/uploads/2021/04/Kartoshka-fri_siteWeb.jpg?v=1617290723' },
      { name: 'Steak', description: 'Steak', shortDescription: 'Steak', recipe: 'Recipe for Steak', ingredients: 'Ingredients for Steak', imageUrl: 'https://halal-spb.ru/sites/default/files/styles/large/public/bd09da8cd90c4f5f8807f24785545d00.jpg?itok=KnyHC-n8' },
    ],
  });

  await prisma.reservation.createMany({
    data: [
      { name: 'Test user 1', email: 'testuser1@gmail.com', phone: '88005553535', date: new Date(2024, 6, 13), time: new Date(2024, 6, 13, 19, 0), guests: 2 },
      { name: 'Test user 2', email: 'testuser2@gmail.com', phone: '88005553535', date: new Date(2024, 7, 13), time: new Date(2024, 7, 13, 18, 30), guests: 4 },
      { name: 'Test user 3', email: 'testuser3@gmail.com', phone: '88005553535', date: new Date(2024, 8, 13), time: new Date(2024, 8, 13, 20, 0), guests: 3 },
      { name: 'Test user 4', email: 'testuser4@gmail.com', phone: '88005553535', date: new Date(2024, 9, 13), time: new Date(2024, 9, 13, 19, 30), guests: 5 },
    ],
  });
}

main()
    .catch(e => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
