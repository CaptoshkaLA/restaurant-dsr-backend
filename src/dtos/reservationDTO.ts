/**
 * @swagger
 * components:
 *   schemas:
 *
 *     CreateReservationDTO:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Reservation name
 *         email:
 *           type: string
 *           description: Reservation contact email
 *         phone:
 *           type: string
 *           description: Reservation contact phone
 *         date:
 *           type: string
 *           format: date
 *           description: Reservation date
 *         time:
 *           type: string
 *           format: time
 *           description: Reservation time
 *         guests:
 *           type: number
 *           description: Reservation guests
 *
 *     UpdateReservationStatusDTO:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           enum: [PENDING, PROCESSED]
 *           description: Reservation status
 */

export interface CreateReservationDTO {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
}

export interface UpdateReservationStatusDTO {
  status: 'PENDING' | 'CONFIRMED' | 'REJECTED';
}
