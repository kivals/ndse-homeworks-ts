import { Router } from 'express';

const booksRouter = Router();

booksRouter.get('/', (req, res) => {
  res.json('HI THERE');
});

export default booksRouter;
