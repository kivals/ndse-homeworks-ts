import { Request, Response, Router } from 'express';
import IController from '../../interfaces/IController';
import IBook from '../../book/IBook';
import IBookService from '../../book/IBookService';
import container from '../../container';

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
  ): Promise<void> => {
    const { id } = request.params;
    const books = await this.bookService.getBookById(id);
    response.json(books);
  };

  private initRoutes(): void {
    this.router.get(this.path, this.getAllBooks);
    this.router.get(`${this.path}/:id`, this.getBookById);
  }
}

export default BookController;
