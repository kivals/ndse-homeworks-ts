import express, { Application } from 'express';
import IController from '../interfaces/IController';
import logger from '../lib/logger';
import errorMiddleware from '../middlewares/error.middleware';

class App {
  public app: Application;

  constructor(controllers: IController[]) {
    this.app = express();

    this.initMiddlewares();
    this.initControllers(controllers);
    this.initializeErrorHandling();
  }

  public listen(): void {
    this.app.listen(process.env.APP_PORT, () => {
      logger.info(`App listening on the port ${process.env.APP_PORT}`);
    });
  }

  private initMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private initControllers(controllers: IController[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }
}

export default App;
