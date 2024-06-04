/**
 * @swagger
 * components:
 *   schemas:
 *
 *     LoginDTO:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: Admin email
 *         password:
 *           type: string
 *           description: Admin password
 *
 *     AuthResponseDTO:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           description: JWT token
 */

export interface LoginDTO {
  email: string;
  password: string;
}

export interface AuthResponseDTO {
  token: string;
}
