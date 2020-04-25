const rootDir = process.env.NODE_ENV === 'development' ? 'src' : 'dist';

module.exports = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST || 'localhost',
  port: process.env.TYPEORM_PORT || 5432,
  username: process.env.TYPEORM_USERNAME || 'postgres',
  password: process.env.TYPEORM_PASSWORD || 'docker',
  database: process.env.TYPEORM_DATABASE || 'postgres',
  entities: [rootDir + '/**/*.entity{.js,.ts}'],
  migrations: [rootDir + '/database/migrations/*{.js,.ts}'],
  cli: {
    migrationsDir: rootDir + '/database/migrations',
  },
};
