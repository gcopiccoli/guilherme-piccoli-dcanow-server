const router = require("express").Router();
const positionsController = require("../controllers/positionsController");

router.route("/:userId").get(positionsController.getUser);
router.route("/:userId/positions").get(positionsController.getUserPositions);
router.route("/:userId").post(positionsController.createNewPosition);
router.route("/:userId").patch(positionsController.updatePosition);
router.route("/:userId").delete(positionsController.deletePosition);

module.exports = router;
