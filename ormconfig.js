const isProduction = process.env.NODE_ENV === 'production';
const rootDir = isProduction ? 'dist' : 'src';

if (!isProduction) {
  require('dotenv/config');
}

module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [rootDir + '/models/*.entity{.js,.ts}'],
  migrations: [rootDir + '/database/migrations/*{.js,.ts}'],
  cli: {
    migrationsDir: rootDir + '/database/migrations',
  },
  ssl: isProduction,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  }
};
