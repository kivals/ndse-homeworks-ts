import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import 'reflect-metadata';
import App from './app';
import BookController from './contollers/book.controller';
import logger from '../lib/logger';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    logger.info('Connected to MongoDD');
    // Start server
    const app = new App([new BookController()]);
    app.listen();
  });
