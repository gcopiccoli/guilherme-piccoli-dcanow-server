const usersData = require("../seed_data/users");
const positionsData = require("../seed_data/positions");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert(usersData);
  await knex("positions").del();
  await knex("positions").insert(positionsData);
};
