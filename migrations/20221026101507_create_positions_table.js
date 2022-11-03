/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("positions", (table) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned().notNullable();
    table.string("stock_symbol").notNullable().unique();
    table.integer("stock_rank").unsigned().notNullable();
    table.integer("initial_value_invested").unsigned().notNullable();
    table.integer("average_price").unsigned().notNullable();
    table.integer("quantity").unsigned().notNullable();
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
