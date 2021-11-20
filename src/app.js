'use strict';

import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import cors from 'cors';

import routes from './routes';
import 'dotenv/config';

mongoose.connect('mongodb://localhost/todo-list', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(require('morgan')('dev'));
}

app.use(helmet());
app.use(express.static(__dirname + '/src/public'));

app.use('/', routes);

export default app;
