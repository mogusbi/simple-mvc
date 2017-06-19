// tslint:disable no-console
import * as http from 'http';
import {app} from './app';

const port: number = process.env.PORT || 8080;

http
  .createServer(app)
  .listen(port, () => console.log(`Server started on port ${port}`));
