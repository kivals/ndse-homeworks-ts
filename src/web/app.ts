import express, { Application } from 'express';
import IController from '../interfaces/IController';
// import * as dotenv from 'dotenv';
// import apiRoutes from './routes';
//
// dotenv.config();
//
// const app: Application = express();
//
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
//
// app.use('/api', apiRoutes);
//
// export default app;

class App {
  public app: Application;

  constructor(controllers: IController[]) {
    this.app = express();

    this.initMiddlewares();
    this.initControllers(controllers);
  }

  public listen(): void {
    this.app.listen(process.env.APP_PORT, () => {
      console.log(`App listening on the port ${process.env.APP_PORT}`);
    });
  }

  private initMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private initControllers(controllers: IController[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }
}

export default App;
