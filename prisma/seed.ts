import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin', 10);

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
