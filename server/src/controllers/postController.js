const router = require("express").Router();
const postService = require("../services/postService");
const { extractErrorMsgs } = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  const posts = await postService.getAll();

  res.status(201).json(posts);
});

router.post("/create", async (req, res) => {
  const { title, topic, text, token } = req.body;
  const owner = jwt.decode(token);

  const payload = {
    title,
    topic,
    text,
    owner,
  };

  try {
    await postService.create(payload);
  } catch (error) {
    const errorMessages = extractErrorMsgs(error);
  }
});

router.get("/:postId", async (req, res) => {
  const { postId } = req.params;

  const post = await postService.getSinglePost(postId).lean();

  res.status(201).json(post);
});

router.put("/:postId/edit", async (req, res) => {
  const { postId } = req.params;

  const { title, topic, text, token } = req.body;
  const owner = jwt.decode(token);
  const payload = { title, topic, text, owner };
  try {
    await postService.update(postId, payload);
  } catch (error) {
    const errorMessages = extractErrorMsgs(error);
  }
});

router.delete("/:postId", async (req, res) => {
  const { postId } = req.params;

  await postService.delete(postId);
});

module.exports = router;
