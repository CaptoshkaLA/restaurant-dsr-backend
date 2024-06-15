import express from 'express';
import { getMenu, addDish, updateDish, deleteDish } from '../controllers/dishController';
import { verifyAdmin } from '../middlewares/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Dishes
 *   description: Dish management
 */

/**
 * @swagger
 * /dishes:
 *   get:
 *     summary: Get all dishes
 *     tags: [Dishes]
 *     responses:
 *       200:
 *         description: List of dishes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CreateDishDTO'
 *       500:
 *         description: Failed to load menu
 */
router.get('/', getMenu);

/**
 * @swagger
 * /dishes:
 *   post:
 *     summary: Add a new dish
 *     tags: [Dishes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateDishDTO'
 *     responses:
 *       201:
 *         description: Dish created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateDishDTO'
 *       401:
 *         description: Unauthorized, invalid or missing token
 *       500:
 *         description: Failed to create dish
 */
router.post('/', verifyAdmin, addDish);

/**
 * @swagger
 * /dishes/{id}:
 *   put:
 *     summary: Update a dish
 *     tags: [Dishes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateDishDTO'
 *     responses:
 *       200:
 *         description: Dish updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateDishDTO'
 *       401:
 *         description: Unauthorized, invalid or missing token
 *       500:
 *         description: Failed to update dish
 */
router.put('/:id', verifyAdmin, updateDish);

/**
 * @swagger
 * /dishes/{id}:
 *   delete:
 *     summary: Delete a dish
 *     tags: [Dishes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Dish deleted
 *       401:
 *         description: Unauthorized, invalid or missing token
 *       500:
 *         description: Failed to delete dish
 */
router.delete('/:id', verifyAdmin, deleteDish);

export default router;
