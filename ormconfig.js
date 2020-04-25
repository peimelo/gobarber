if (process.env.NODE_ENV === 'production') {
  module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'postgres',
    entities: ['/app/dist/models/*.js'],
    migrations: ['/app/dist/database/migrations/*.js'],
    cli: {
      migrationsDir: '/app/dist/database/migrations',
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
