if (process.env.NODE_ENV === 'production') {
  module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'postgres',
    entities: [`${__dirname}/dist/models/*.js`],
    migrations: [`${__dirname}/dist/database/migrations/*.js`],
    cli: {
      migrationsDir: `${__dirname}/database/migrations`,
    },
  };
} else {
  module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'postgres',
    entities: ['./src/models/*.ts'],
    migrations: ['./src/database/migrations/*.ts'],
    cli: {
      migrationsDir: './src/database/migrations',
    },
  };
}
