const rootDir = process.env.NODE_ENV === 'development' ? 'src' : 'dist';

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  entities: [rootDir + '/**/*.entity{.js,.ts}'],
  migrations: [rootDir + '/database/migrations/*{.js,.ts}'],
  cli: {
    migrationsDir: rootDir + '/database/migrations',
  },
};
