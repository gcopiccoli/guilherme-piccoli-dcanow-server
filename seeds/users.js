const usersData = require("../seed_data/users");
const positionsData = require("../seed_data/positions");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//TO DO: CHANGE FILE NAME TO USERS_POSITIONS.JS
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert(usersData);
  await knex("positions").del();
  await knex("positions").insert(positionsData);
};
