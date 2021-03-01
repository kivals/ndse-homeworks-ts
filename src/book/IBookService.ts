import IBook from './IBook';

abstract class IBookService {
  abstract getAllBook(): Promise<IBook[]>;

  abstract getBookById(id: string): Promise<IBook>;
}

export default IBookService;
