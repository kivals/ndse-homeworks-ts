import { injectable } from 'inversify';
import { IBookService } from '../../book/IBookService';
import IBookController from './IBookController';

@injectable()
export default class BookController implements IBookController {
  constructor(public bookService: IBookService) {}

  getBook() {
    this.bookService.getBook();
  }
}
