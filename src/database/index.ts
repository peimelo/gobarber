import { createConnection } from 'typeorm';

if (process.env.NODE_ENV === 'production') {
  createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'postgres',
    entities: ['../models/*.js'],
    migrations: ['./migrations/*.js'],
    cli: {
      migrationsDir: './migrations',
    },
  });
} else {
  createConnection();
}
