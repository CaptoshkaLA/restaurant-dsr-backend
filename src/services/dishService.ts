import { PrismaClient } from '@prisma/client';
import { CreateDishDTO, UpdateDishDTO } from '../dtos/dishDTO';

const prisma = new PrismaClient();

export const addDish = async (data: CreateDishDTO) => {
  return await prisma.dish.create({ data });
};

export const getDish = async (id: number) => {
  return await prisma.dish.findUnique({
    where: { id },
  });
};

export const updateDish = async (id: number, data: UpdateDishDTO) => {
  return await prisma.dish.update({
    where: { id },
    data,
  });
};

export const deleteDish = async (id: number) => {
  return await prisma.dish.delete({ where: { id } });
};

export const getMenu = async () => {
  return await prisma.dish.findMany();
};
