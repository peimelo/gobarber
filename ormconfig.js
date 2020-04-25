module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  entities: ['./src/**/*.entity{.js,.ts}'],
  migrations: ['./src/database/migrations/*{.js,.ts}'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};
