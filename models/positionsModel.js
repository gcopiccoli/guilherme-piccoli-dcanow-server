const { Model } = require("objection");
const knex = require("knex")(require("../knexfile"));

Model.knex(knex);

class positionsModel extends Model {
  static get tableName() {
    return "positions";
  }
}

module.exports = positionsModel;
