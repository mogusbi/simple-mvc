import {urlencoded} from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as csrf from 'csurf';
import * as express from 'express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import {resolve} from 'path';
import 'reflect-metadata';
import {useExpressServer} from 'routing-controllers';

const config: express.Application = express();

config
  .set('views', resolve(__dirname, '../views'))
  .set('view engine', 'pug')
  .use(morgan('dev'))
  .use(compression())
  .use(helmet())
  .use(urlencoded({
    extended: false
  }))
  .use(cookieParser())
  .use(csrf({
    cookie: true
  }))
  .use(express.static(resolve(__dirname, '../wwwroot')));

const app: express.Application = useExpressServer(config, {
  controllers: [
    resolve(__dirname, '../controllers/**/*.ts')
  ]
});

export {app};
