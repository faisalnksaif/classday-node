process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import errorHandler from 'errorhandler'
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import config from 'config';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import { connect, set } from 'mongoose';
import { dbConnection } from '@databases';
import { Routes } from '@interfaces/routes.interface';
import errorMiddleware from '@middlewares/error.middleware';
import { logger, stream } from '@utils/logger';
import { Env, STAGE } from '@/configs/env';
import ip from 'ip'

class App {
  public app: express.Application;
  public port: string | number;
  public env: string;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = Env.PORT;
    this.env = Env.STAGE;

    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    // this.initializeSwagger();
    this.initializeErrorHandling();

    // this.configCloudinary()
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`=================================`);
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port ${ip.address()}:${this.port}`);
      logger.info(`=================================`);
    });
  }

  public getServer() {
    return this.app;
  }

  private async connectToDatabase() {
    if (Env.STAGE !== STAGE.PRODUCTION) {
      set('debug', true);
    }

    await connect(dbConnection.url, {
      autoIndex: true,
    }).catch(err => {
      console.log(err);
    });

    console.log('mongod connected');
  }


  private initializeMiddlewares() {
    this.app.use(errorHandler({ log: true }));
    this.app.use(morgan(config.get('log.format'), { stream }));
    this.app.use(cors({ origin: config.get('cors.origin'), credentials: config.get('cors.credentials') }));
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use(express.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(cookieParser());

    process.on('unhandledRejection', (error, promise) => {
      console.log(' Oh Lord! We forgot to handle a promise rejection here: ', promise);
      console.log(' The error was: ', error);
    });
  }


  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use('/', route.router);
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;
