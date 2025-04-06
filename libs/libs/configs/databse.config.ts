import 'dotenv/config';
import { Options } from '@mikro-orm/core';
import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import {
  ReflectMetadataProvider,
  PostgreSqlDriver,
} from '@mikro-orm/postgresql';

export const databaseConfig: Options = {
  entities: ['./dist/libs/libs/entities'],
  entitiesTs: ['../entities'],
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  debug: process.env.DATABASE_DEBUG === 'true',
  metadataProvider: ReflectMetadataProvider,
  driver: PostgreSqlDriver,
  timezone: '+04:30',
} as MikroOrmModuleOptions;
