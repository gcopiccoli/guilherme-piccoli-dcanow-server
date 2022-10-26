const positionsData = require("../seed_data/positions");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("positions").del();
  await knex("positions").insert(positionsData);
};
