import express from 'express';
import { createReservation, getReservations, updateReservationStatus } from '../controllers/reservationController';
import { verifyAdmin } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/', createReservation);
router.get('/', verifyAdmin, getReservations);
router.put('/:id/status', verifyAdmin, updateReservationStatus);

export default router;
