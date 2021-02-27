import { Request, Response, Router } from 'express';
import IBook from './IBook';
import IController from '../interfaces/IController';

class BookController implements IController {
  path = '/books';

  router = Router();

  private books: IBook[] = [
    {
      title: 'Заг книги',
      authors: 'авторы',
    },
  ];

  constructor() {
    this.initRoutes();
  }

  public initRoutes(): void {
    this.router.get(this.path, this.getAllBooks);
  }

  public getAllBooks = (request: Request, response: Response): void => {
    response.json(this.books);
  };
}

export default BookController;
