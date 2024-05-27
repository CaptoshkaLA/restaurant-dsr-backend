import express from 'express';
import { login, getReservations, updateReservationStatus, addDish, updateDish, deleteDish } from '../controllers/adminController';
import { verifyAdmin } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/login', login);
router.get('/reservations', verifyAdmin, getReservations);
router.put('/reservation/:id/status', verifyAdmin, updateReservationStatus);
router.post('/dish', verifyAdmin, addDish);
router.put('/dish/:id', verifyAdmin, updateDish);
router.delete('/dish/:id', verifyAdmin, deleteDish);

export default router;
