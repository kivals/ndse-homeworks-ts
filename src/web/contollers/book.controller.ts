import { NextFunction, Request, Response, Router } from 'express';
import IController from '../../interfaces/IController';
import IBook from '../../book/IBook';
import IBookService from '../../book/IBookService';
import container from '../../container';
import HttpException from '../../exceptions/HttpException';

class BookController implements IController {
  private readonly bookService: IBookService;

  path = '/books';

  router = Router();

  constructor() {
    this.bookService = container.get(IBookService);
    this.initRoutes();
  }

  public getAllBooks = async (
    request: Request,
    response: Response,
  ): Promise<void> => {
    const books = await this.bookService.getAllBook();
    response.json(books);
  };

  public getBookById = async (
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { id } = request.params;
    try {
      const book = await this.bookService.getBookById(id);
      if (!book) {
        next(HttpException.notFound('Книга не найдена'));
      }
      response.json(book);
    } catch (error) {
      next(error);
    }
  };

  private initRoutes(): void {
    this.router.get(this.path, this.getAllBooks);
    this.router.get(`${this.path}/:id`, this.getBookById);
  }
}

export default BookController;
