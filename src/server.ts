import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import cors from 'cors';
import uploadConfig from './config/upload';
import './database';
import AppError from './errors/AppError';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  const help = `
  <pre>
  Welcome
  </pre>
  `;

  response.send(help);
});

app.use('/files', express.static(uploadConfig.directory));

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error.',
  });
});

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`🚀 Server started on port ${port}.`);
});
