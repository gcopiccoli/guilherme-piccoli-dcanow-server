const { Model } = require("objection");
const knex = require("knex")(require("../knexfile"));

Model.knex(knex);

class userModel extends Model {
  static get tableName() {
    return "users";
  }
}

modeule.exports = userModel;
