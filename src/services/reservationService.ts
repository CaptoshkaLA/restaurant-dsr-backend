import { PrismaClient } from '@prisma/client';
import { CreateReservationDTO, UpdateReservationStatusDTO, UpdateReservationDateTimeDTO } from '../dtos/reservationDTO';

const prisma = new PrismaClient();

export const createReservation = async (data: CreateReservationDTO) => {
  return await prisma.reservation.create({
    data: {
      ...data,
      date: new Date(data.date),
      time: new Date(data.time),
    },
  });
};

export const getReservations = async () => {
  return await prisma.reservation.findMany();
};

export const updateReservationStatus = async (id: number, { status }: UpdateReservationStatusDTO) => {
  return await prisma.reservation.update({
    where: { id },
    data: { status },
  });
};

export const updateReservationDateTime = async (id: number, { date, time }: UpdateReservationDateTimeDTO) => {
  return await prisma.reservation.update({
    where: { id },
    data: {
      date: new Date(date),
      time: new Date(time),
    },
  });
};
