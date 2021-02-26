import mongoose from 'mongoose';
import app from './app';

const PORT = process.env.APP_PORT || 8000;

mongoose
  .connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connected to MongoDD');
    // Start server
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
  });
