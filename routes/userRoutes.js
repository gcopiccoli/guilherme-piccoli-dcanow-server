const router = require("express").Router();
const positionsController = require("../controllers/positionsController");
const userController = require("../controllers/userController");

router.get("/:userId").get(positionsController.getUser);
router.route("/getuserbyemail").get(userController.getUserByEmail);

router.route("/register").post(userController.createNewUser);
router
  .route("/:userId/positions/all")
  .get(positionsController.getUserPositions);
router
  .route("/:userId/positions/add")
  .post(userController.createNewPositionForUser);
router
  .route("/:userId/positions/:positionId/update")
  .patch(positionsController.updatePosition);
router
  .route("/:userId/positions/:positionId/delete")
  .delete(positionsController.deletePosition);

module.exports = router;
