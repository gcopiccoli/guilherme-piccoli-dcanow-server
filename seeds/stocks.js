const stocksData = require("../seed_data/stocks");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("stocks").del();
  await knex("stocks").insert(stocksData);
};
