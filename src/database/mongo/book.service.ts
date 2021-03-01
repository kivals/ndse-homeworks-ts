import { injectable } from 'inversify';
import IBookService from '../../book/IBookService';
import BookModel from './book.model';
import IBook from '../../book/IBook';

@injectable()
class BookService implements IBookService {
  async getAllBook(): Promise<IBook[]> {
    return BookModel.find({}).exec();
  }

  async getBookById(id: string): Promise<IBook> {
    return BookModel.findById(id);
  }
}

export default BookService;
