import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { LoginDTO, AuthResponseDTO } from '../dtos/authDTO';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined');
}

/*
Убрал bcrypt, т.к. при хешировании пароля падала ошибка: Segmentation fault
Переделал под хеширование пароля вручную
 */

export const login = async ({ email, password }: LoginDTO): Promise<AuthResponseDTO> => {
  const user = await prisma.user.findUnique({ where: { email } });
  let hashedPassword = crypto.createHash('sha256').update(password).digest('hex')
  if (!user || !(hashedPassword == user.password) || user.role !== 'ADMIN') {
    throw new Error('Invalid email or password');
  }

  const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
  return { token };
};

export const refreshToken = async (refreshToken: string): Promise<AuthResponseDTO> => {
  try {
    const decoded = jwt.verify(refreshToken, JWT_SECRET) as { userId: number, role: string };
    const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
    if (!user) {
      throw new Error('User not found');
    }

    const newAccessToken = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    return { token: newAccessToken };
  } catch (error) {
    throw new Error('Invalid token');
  }
};