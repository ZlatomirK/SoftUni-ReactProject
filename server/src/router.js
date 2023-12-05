const router = require("express").Router();
const userController = require("./controllers/userController");
const postController = require("./controllers/postController");
// const homeController = require("./controllers/homeController");

router.use("/users", userController);
router.use("/posts", postController);
// router.use(homeController);

module.exports = router;
