import mongoose, { Document, Schema } from 'mongoose';
import iBook from './interfaces/IBook';

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  authors: {
    type: String,
    required: true,
  },
  favorite: {
    type: String,
    default: false,
  },
  fileCover: {
    type: String,
  },
  fileName: {
    type: String,
  },
  fileBook: {
    type: String,
  },
  views: {
    type: Number,
    default: 0,
  },
});

const BookModel = mongoose.model<iBook & Document>('Book', bookSchema);
export default BookModel;
