const Post = require("../models/Post");

exports.create = (createData) => Post.create(createData);

exports.getAll = () => Post.find().lean();

exports.getSinglePost = (postId) => Post.findById(postId).populate("owner");

exports.update = (postId, postData) =>
  Post.findByIdAndUpdate(postId, postData, { runValidators: true });

exports.delete = (postId) => Post.findByIdAndDelete(postId);
