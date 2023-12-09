const router = require("express").Router();
const postService = require("../services/postService");
// const { isAuth } = require("../middlewares/authMiddleware");
const { extractErrorMsgs } = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  const posts = await postService.getAll();
  // console.log(posts)

  res.status(201).json(posts);
});

router.post("/create", async (req, res) => {
  const { title, topic, text, token } = req.body;
  const owner = jwt.decode(token);
  // console.log(ownerId);

  const payload = {
    title,
    topic,
    text,
    owner,
  };

  try {
    await postService.create(payload);

    // res.redirect("/posts/all");
  } catch (error) {
    const errorMessages = extractErrorMsgs(error);
    // res.status(404).render("post/create", { errorMessages });
  }
});

router.get("/:postId", async (req, res) => {
  const { postId } = req.params;

  const post = await postService.getSinglePost(postId).lean();

  res.status(201).json(post);
});
// router.get("/profile", isAuth, async (req, res) => {
//   const { user } = req;

//   const myCreatures = await creatureService.getMyCreatures(user?._id).lean();

//   res.render("post/profile", { myCreatures });
// });

// router.get("/:creatureId/edit", isAuth, async (req, res) => {
//   const { creatureId } = req.params;

//   const creature = await creatureService.getSingleCreature(creatureId).lean();

//   res.render("post/edit", { creature });
// });

// router.post("/:creatureId/edit", isAuth, async (req, res) => {
//   const { creatureId } = req.params;

//   const { name, species, skinColor, eyeColor, image, description } = req.body;
//   const payload = {
//     name,
//     species,
//     skinColor,
//     eyeColor,
//     image,
//     description,
//     owner: req.user,
//   };
//   try {
//     await creatureService.update(creatureId, payload);

//     res.redirect(`/posts/${creatureId}/details`);
//   } catch (error) {
//     const errorMessages = extractErrorMsgs(error);
//     const creature = await creatureService.getSingleCreature(creatureId).lean();
//     res.status(404).render("post/edit", { creature, errorMessages });
//   }
// });

router.get("/:postId/delete", async (req, res) => {
  const { postId } = req.params;

  await postService.delete(postId);
});

// router.get("/:creatureId/vote", isAuth, async (req, res) => {
//   const { creatureId } = req.params;
//   const { _id } = req.user;

//   await creatureService.addVotes(creatureId, _id);

//   res.redirect(`/posts/${creatureId}/details`);
// });

module.exports = router;
