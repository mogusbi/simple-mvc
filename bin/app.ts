import {urlencoded} from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as csrf from 'csurf';
import {Application, static as staticRoot} from 'express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import {configure} from 'nunjucks';
import {resolve} from 'path';
import 'reflect-metadata';
import {createExpressServer} from 'routing-controllers';

const app: Application = createExpressServer({
  controllers: [
    resolve('./controllers/*.ts')
  ]
});

configure('views', {
  autoescape: true,
  express: app,
  watch: process.env.NODE_ENV === 'development'
});

app
  .use(morgan('dev'))
  .use(compression())
  . use(helmet())
  .use(urlencoded({
    extended: false
  }))
  .use(cookieParser())
  .use(csrf({
    cookie: true
  }))
  .use(staticRoot(resolve('./wwwroot')));

export {app};
