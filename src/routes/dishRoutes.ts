import express from 'express';
import { getMenu, addDish, updateDish, deleteDish } from '../controllers/dishController';
import { verifyAdmin } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/', getMenu);
router.post('/', verifyAdmin, addDish);
router.put('/:id', verifyAdmin, updateDish);
router.delete('/:id', verifyAdmin, deleteDish);

export default router;
