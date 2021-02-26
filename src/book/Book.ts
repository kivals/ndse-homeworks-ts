import { IBook } from './interfaces/IBook';

export default class Book implements IBook {
  constructor(
    title: string,
    authors: string,
    description?: string,
    favorite?: string,
    fileBook?: string,
    fileCover?: string,
    fileName?: string,
  ) {
    this.authors = authors;
    this.title = title;
    this.description = description;
    this.favorite = favorite;
    this.fileBook = fileBook;
    this.fileCover = fileCover;
    this.fileName = fileName;
  }

  authors: string;

  description: string;

  favorite: string;

  fileBook: string;

  fileCover: string;

  fileName: string;

  title: string;
}
