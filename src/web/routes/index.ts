import { Router } from 'express';
import booksRouter from './book.routes';

const apiRoutes = Router();

apiRoutes.use('/books', booksRouter);

export default apiRoutes;
