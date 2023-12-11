const router = require("express").Router();
const userController = require("./controllers/userController");
const postController = require("./controllers/postController");

router.use("/users", userController);
router.use("/posts", postController);

module.exports = router;
