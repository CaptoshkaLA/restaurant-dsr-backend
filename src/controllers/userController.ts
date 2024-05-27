import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getMenu = async (req: Request, res: Response) => {
  try {
    const menu = await prisma.dish.findMany();
    res.json(menu);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get menu' });
  }
};

export const createReservation = async (req: Request, res: Response) => {
  const { name, email, phone, date, time, guests } = req.body;

  try {
    const reservation = await prisma.reservation.create({
      data: {
        name,
        email,
        phone,
        date: new Date(date),
        time: new Date(time),
        guests,
      },
    });
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create reservation' });
  }
};
