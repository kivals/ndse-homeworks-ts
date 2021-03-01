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

  async modifyBook(id: string, bookData: IBook): Promise<IBook> {
    return BookModel.findByIdAndUpdate(id, bookData, { new: true });
  }

  async createBook(bookData: IBook): Promise<IBook> {
    const createdBook = new BookModel(bookData);
    return createdBook.save();
  }
}

export default BookService;
