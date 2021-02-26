import express, { Application, Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT = process.env.APP_PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Application routing
app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Hello World2' });
});

// Start server
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
