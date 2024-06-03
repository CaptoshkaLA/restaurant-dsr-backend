import { Request, Response } from 'express';
import * as reservationService from '../services/reservationService';
import { CreateReservationDTO, UpdateReservationStatusDTO } from '../dtos/reservationDTO';

export const createReservation = async (req: Request, res: Response) => {
  const reservationDTO: CreateReservationDTO = req.body;

  try {
    const reservation = await reservationService.createReservation(reservationDTO);
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ error: 'Не удалось создать резерв' });
  }
};

export const getReservations = async (req: Request, res: Response) => {
  try {
    const reservations = await reservationService.getReservations();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: 'Не удалось получить резерв' });
  }
};

export const updateReservationStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const statusDTO: UpdateReservationStatusDTO = req.body;

  try {
    const reservation = await reservationService.updateReservationStatus(Number(id), statusDTO);
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ error: 'Не удалось обновить статус резерва' });
  }
};
