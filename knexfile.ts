import 'dotenv/config';
import { Knex } from 'knex';
import 'tsconfig-paths/register';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      stub: 'migration.stub',
      tableName: 'table_migrations',
      directory: './database/migrations',
    },
  },
};

module.exports = config;
