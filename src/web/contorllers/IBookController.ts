import { IBookService } from '../../book/IBookService';

export default abstract class IBookController {
  bookService: IBookService;

  abstract getBook(): void;
}
