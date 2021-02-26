import express, { Application, Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import apiRoutes from './routes';

dotenv.config();

const app: Application = express();
const PORT = process.env.APP_PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRoutes);

// Start server
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
