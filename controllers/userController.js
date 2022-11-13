const positionsModel = require("../models/positionsModel");
const userModel = require("../models/userModel");

exports.createNewPositionForUser = async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  try {
    const { data } = await positionsModel.createNewPosition(
      req.params.userId,
      req.body
    );
    res.status(201).json({
      message: `Successfully added position`,
      data: data,
    });
  } catch (err) {
    res
      .status(400)
      .json({ message: `Error creating position: ${err.message} ` });
  }
};

exports.createNewUser = async (req, res) => {
  try {
    await userModel.createNewUser(req.body);
    res.status(201).json({ message: `Successfully added user` });
  } catch (err) {
    res.status(400).json({ message: `Error creating user ${err.message}` });
  }
};

exports.getUserByEmail = async (req, res) => {
  const email = req.query.email;
  console.log(email);
  try {
    const data = await userModel.getUserByEmail(email);
    console.log(data);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: `Error getting user ${err.message}` });
  }
};
