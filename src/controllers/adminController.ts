import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined');
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password)) || user.role !== 'ADMIN') {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to login' });
  }
};

export const getReservations = async (req: Request, res: Response) => {
  try {
    const reservations = await prisma.reservation.findMany();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reservations' });
  }
};

export const updateReservationStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const reservation = await prisma.reservation.update({
      where: { id: Number(id) },
      data: { status },
    });
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update reservation status' });
  }
};

export const addDish = async (req: Request, res: Response) => {
  const { name, description, shortDescription, recipe, ingredients, imageUrl } = req.body;

  try {
    const dish = await prisma.dish.create({
      data: { name, description, shortDescription, recipe, ingredients, imageUrl },
    });
    res.status(201).json(dish);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add dish' });
  }
};

export const updateDish = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, shortDescription, recipe, ingredients, imageUrl } = req.body;

  try {
    const dish = await prisma.dish.update({
      where: { id: Number(id) },
      data: { name, description, shortDescription, recipe, ingredients, imageUrl },
    });
    res.json(dish);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update dish' });
  }
};

export const deleteDish = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.dish.delete({ where: { id: Number(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete dish' });
  }
};
