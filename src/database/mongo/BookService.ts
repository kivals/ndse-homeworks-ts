import { injectable } from 'inversify';
import { IBookService } from '../../book/IBookService';

@injectable()
export default class BookService implements IBookService {
  getBook() {
    console.log('service get book');
  }
}
