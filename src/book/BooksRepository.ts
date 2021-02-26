import { IBookActions } from './interfaces/IBookActions';
import { IBook } from './interfaces/IBook';
import Book from './Book';

export default class BooksRepository {
  static createBook(book: IBook): IBook {
    return new Book(book.title, book.authors);
  }

  static deleteBook(id: string): IBook {
    return undefined;
  }

  static getBook(id: string): IBook {
    return undefined;
  }

  static getBooks(): Array<IBook> {
    return undefined;
  }

  static updateBook(id: string): IBook {
    return undefined;
  }
}

// Методы, которые должны быть в BooksRepository
//
// createBook(book){} - создание книги
// getBook(id){} - получение книги по id
// getBooks(){} - получение всех книг
// updateBook(id){} - обновление книги
// deleteBook(id){} - удаление книги
//
