import express, { Application, Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import apiRoutes from './routes';

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRoutes);

export default app;
