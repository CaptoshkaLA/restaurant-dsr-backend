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
}

main()
    .catch(e => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
