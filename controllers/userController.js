const positionsModel = require("../models/positionsModel");

exports.createNewPositionForUser = async (req, res) => {
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
