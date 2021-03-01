import IBook from './IBook';

abstract class IBookService {
  abstract getAllBook(): Promise<IBook[]>;

  abstract getBookById(id: string): Promise<IBook>;

  abstract modifyBook(id: string, bookData: IBook): Promise<IBook>;

  abstract createBook(bookData: IBook): Promise<IBook>;
}

export default IBookService;
