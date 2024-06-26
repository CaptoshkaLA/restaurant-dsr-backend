import express, { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
// import { PrismaClient } from '@prisma/client';
import authRoutes from './routes/authRoutes';
import reservationRoutes from './routes/reservationRoutes';
import dishRoutes from './routes/dishRoutes';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './swaggerConfig';

const app = express();
// const prisma = new PrismaClient();
dotenv.config();
const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/dishes', dishRoutes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// const errorHandler: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
//   console.error(err.stack);
//   res.status(500).send('500 Internal Server Error!');
// };
//
// app.use(errorHandler);

export default app;
