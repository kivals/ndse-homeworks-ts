import { Router } from 'express';
import { container } from '../../container';
import IBookController from '../contorllers/IBookController';

const booksRouter = Router();

booksRouter.get('/', (req, res) => {
  const controller = container.get(IBookController);
  controller.getBook();
  res.json('HI THERE');
});

export default booksRouter;
