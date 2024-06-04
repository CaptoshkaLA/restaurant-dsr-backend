/**
 * @swagger
 * components:
 *   schemas:
 *
 *     CreateDishDTO:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Dish name
 *         description:
 *           type: string
 *           description: Dish description
 *         shortDescription:
 *           type: string
 *           description: Short description of dish
 *         recipe:
 *           type: string
 *           description: Dish recipe
 *         ingredients:
 *           type: string
 *           description: Dish ingredients
 *         imageUrl:
 *           type: string
 *           description: URL to dish image
 *
 *     UpdateDishDTO:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Dish name
 *         description:
 *           type: string
 *           description: Dish description
 *         shortDescription:
 *           type: string
 *           description: Short description of dish
 *         recipe:
 *           type: string
 *           description: Dish recipe
 *         ingredients:
 *           type: string
 *           description: Dish ingredients
 *         imageUrl:
 *           type: string
 *           description: URL to dish image
 */

export interface CreateDishDTO {
  name: string;
  description: string;
  shortDescription: string;
  recipe: string;
  ingredients: string;
  imageUrl: string;
}

export interface UpdateDishDTO {
  name?: string;
  description?: string;
  shortDescription?: string;
  recipe?: string;
  ingredients?: string;
  imageUrl?: string;
}
