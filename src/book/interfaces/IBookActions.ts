import { IBook } from './IBook';

export interface IBookActions {
  createBook(book: IBook): IBook;
  getBook(id: string): IBook;
  getBooks(): Array<IBook>;
  updateBook(id: string): IBook;
  deleteBook(id: string): IBook;
}
