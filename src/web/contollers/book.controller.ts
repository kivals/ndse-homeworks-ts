import { NextFunction, Request, Response, Router } from 'express';
import { injectable } from 'inversify';
import IController from '../../interfaces/IController';
import IBookService from '../../book/IBookService';
import container from '../../container';
import HttpException from '../../exceptions/HttpException';
import validationMiddleware from '../../middlewares/validation.middleware';
import CreateBookDto from '../../book/book.dto';
import IBook from '../../book/IBook';

class BookController implements IController {
  readonly bookService: IBookService;

  path = '/books';

  router = Router();

  constructor() {
    this.bookService = container.get(IBookService);
    this.initRoutes();
  }

  getAllBooks = async (request: Request, response: Response): Promise<void> => {
    const books = await this.bookService.getAllBook();
    response.json(books);
  };

  getBookById = async (
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { id } = request.params;
    try {
      const book = await this.bookService.getBookById(id);
      if (!book) {
        return next(HttpException.notFound('Книга не найдена'));
      }
      response.json(book);
    } catch (error) {
      next(error);
    }
  };

  modifyBook = async (
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { id } = request.params;
    const bookData: IBook = request.body;
    const updatedBook = await this.bookService.modifyBook(id, bookData);
    if (!updatedBook) {
      return next(HttpException.notFound('Книга не найдена'));
    }
    response.json(updatedBook);
  };

  createBook = async (request: Request, response: Response): Promise<void> => {
    const bookData: IBook = request.body;
    const createdBook = await this.bookService.createBook(bookData);
    response.json(createdBook);
  };

  private initRoutes(): void {
    this.router.get(this.path, this.getAllBooks);
    this.router.get(`${this.path}/:id`, this.getBookById);
    this.router.put(
      `${this.path}/:id`,
      validationMiddleware(CreateBookDto, true),
      this.modifyBook,
    );
    this.router.post(
      this.path,
      validationMiddleware(CreateBookDto),
      this.createBook,
    );
  }
}

export default BookController;
