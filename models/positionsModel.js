const knex = require("knex")(require("../knexfile"));

exports.createNewPosition = (userId, position) => {
  return knex("positions").insert({
    user_id: +userId,
    stock_symbol: position.stock_symbol,
    stock_rank: position.stock_rank,
    initial_value_invested: position.initial_value_invested,
    average_price: position.average_price,
    quantity: position.quantity,
  });
};
