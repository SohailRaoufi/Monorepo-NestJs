import { Knex } from 'knex';

const tableName = 'users';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.hasTable(tableName).then(function (exists) {
    if (!exists) {
      return knex.schema.createTable(tableName, (table) => {
        table.increments('id').primary(); // Primary key, auto-increment

        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.boolean('is_active').notNullable().defaultTo(true);

        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('deleted_at').nullable(); // Optional soft-delete field
      });
    }
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(tableName);
}
