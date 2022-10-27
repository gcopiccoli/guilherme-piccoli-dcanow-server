const knex = require("knex")(require("../knexfile.js"));
const positionsModel = require("../models/positionsModel");

exports.getUser = (req, res) => {
  knex("users")
    .where({ id: req.params.userId })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(() => {
      res.status(400).json({
        message: `Error getting user with ID ${req.params.userId}`,
      });
    });
};

exports.getUserPositions = (req, res) => {
  knex("users")
    .join("positions", "positions.user_id", "users.id")
    .options({ nestTables: true })
    .where({ user_id: req.params.userId })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(() => {
      res.status(400).json({
        message: `Error getting positions for user with ID ${req.params.userId}`,
      });
    });
};

exports.createNewPosition = (req, res) => {
  knex("position")
    // .join("positions", "positions.user_id", "users.id")
    // .options({ nestTables: true })
    // .insert(req.body)
    .insert({
      user_id: req.params.userId,
      stock_id: req.body.stock_id,
      stock_rank: req.body.stock_rank,
      initial_value_invested: req.body.initial_value_invested,
      average_price: req.body.average_price,
      quantity: req.body.quantity,
    })
    .then((newPositionIds) => {
      res.status(201).json({ newPositionId: newPositionIds[0] });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ message: `Error creating position: ${err.message} ` });
    });
};

exports.updatePosition = (req, res) => {
  const positionId = req.params.positionId;
  knex("positions")
    // .join("positions", "positions.user_id", "users.id")
    // .options({ nestTables: true })
    .where({ id: positionId })
    .update(req.body)
    .then((numRecordsUpdated) => {
      fetchPosition();
    })
    .catch((err) => {
      res
        .status(400)
        .json({ message: `Error updating position: ${err.message}` });
    });

  const fetchPosition = () => {
    knex("positions")
      //   .join("positions", "positions.user_id", "users.id")
      //   .options({ nestTables: true })
      .where({ id: positionId })
      .then((position) => {
        res.status(201).json(position);
      })
      .catch((err) => {
        res.status(400).json({
          message: `Error fetching positions after update: ${err.message}`,
        });
      });
  };
};

exports.deletePosition = (req, res) => {
  knex("positions")
    // .join("positions", "positions.user_id", "users.id")
    // .options({ nestTables: true })
    .where({ id: req.params.positionId })
    .del()
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res
        .status(400)
        .json({ message: `Error deleting position: ${err.message}` });
    });
};
