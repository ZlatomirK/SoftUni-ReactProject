const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true,
    // minLength: 2,
  },
  topic: {
    type: String,
    required: true,
    // minLength: 3,
  },
  text: {
    type: String,
    required: true,
    // minLength: 3,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
