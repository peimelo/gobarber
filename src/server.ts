import express from 'express';
import 'reflect-metadata';
import './database';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.get('/', (request, response) => {
  const help = `
  <pre>
    Welcome
  </pre>
  `;

  response.send(help);
});

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`🚀 Server started on port ${port}.`);
});
