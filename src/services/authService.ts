import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { LoginDTO, AuthResponseDTO } from '../dtos/authDTO';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET не задан');
}

export const login = async ({ email, password }: LoginDTO): Promise<AuthResponseDTO> => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password)) || user.role !== 'ADMIN') {
    throw new Error('Некорректный email или пароль');
  }

  const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
  return { token };
};
