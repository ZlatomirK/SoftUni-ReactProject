const Post = require("../models/Post");

exports.create = (createData) => Post.create(createData);

exports.getAll = () => Post.find().lean();

exports.getSinglePost = (postId) =>
  Post.findById(postId).populate("owner")//.populate("votes");

exports.update = (postId, postData) =>
  Post.findByIdAndUpdate(postId, postData, { runValidators: true });

exports.delete = (postId) => Post.findByIdAndDelete(postId);

// exports.getMyCreatures = (ownerId) =>
//   Creature.find({ owner: ownerId }).populate("owner");

// exports.addVotes = async (creatureId, userId) => {
//   const creature = await this.getSingleCreature(creatureId);
//   const isExistingInVotes = creature.votes.some(
//     (v) => v?.toString() === userId
//   );

//   if (isExistingInVotes) {
//     return;
//   }

//   creature.votes.push(userId);
//   return creature.save();
// };
