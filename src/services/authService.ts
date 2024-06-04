import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { LoginDTO, AuthResponseDTO } from '../dtos/authDTO';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET не задан');
}

/*
Убрал bcrypt, т.к. при хешировании пароля падала ошибка: Segmentation fault
Переделал под хеширование пароля вручную
 */

export const login = async ({ email, password }: LoginDTO): Promise<AuthResponseDTO> => {
  const user = await prisma.user.findUnique({ where: { email } });
  let hashedPassword = crypto.createHash('sha256').update(password).digest('hex')
  if (!user || !(hashedPassword == user.password) || user.role !== 'ADMIN') {
    throw new Error('Некорректный email или пароль');
  }

  const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
  return { token };
};
