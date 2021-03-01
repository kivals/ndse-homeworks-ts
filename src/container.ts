import { Container } from 'inversify';
import BookService from './database/mongo/book.service';
import IBookService from './book/IBookService';

const container = new Container();
container.bind(IBookService).to(BookService).inSingletonScope();

export default container;
