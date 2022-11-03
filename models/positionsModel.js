// const { Model } = require("objection");
const knex = require("knex")(require("../knexfile"));

// Model.knex(knex);

// class positionsModel extends Model {
//   static get tableName() {
//     return "positions";
//   }

// }

exports.createNewPosition = (userId, position) => {
  return knex("positions").insert({
    user_id: userId,
    stock_symbol: position.stock_id,
    stock_rank: position.stock_rank,
    initial_value_invested: position.initial_value_invested,
    average_price: position.average_price,
    quantity: position.quantity,
  });
};

// module.exports = positionsModel;
