import express from 'express';
import { getMenu, createReservation } from '../controllers/userController';

const router = express.Router();

router.get('/menu', getMenu);
router.post('/reservation', createReservation);

export default router;
