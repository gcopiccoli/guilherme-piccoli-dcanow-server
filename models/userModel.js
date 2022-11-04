const { Model } = require("objection");
const knex = require("knex")(require("../knexfile"));

Model.knex(knex);

// class userModel extends Model {
//   static get tableName() {
//     return "users";
//   }
// }

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

exports.createNewUser = (user) => {
  console.log(user.displayName, user.email, user.auth_type);
  return knex("users").insert({
    name: user.displayName,
    email: user.email,
    auth_type: user.auth_type,
  });
};

exports.getUserByEmail = (email) => {
  return knex("users").where("email", email).first();
};

// modeule.exports = userModel;
