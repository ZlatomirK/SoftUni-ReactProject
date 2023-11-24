const router = require("express").Router();
const userController = require("./controllers/userController");
// const homeController = require("./controllers/homeController");
// const postController = require("./controllers/postController");

router.use("/users", userController);
// router.use(homeController);
// router.use("/posts", postController);

module.exports = router;
