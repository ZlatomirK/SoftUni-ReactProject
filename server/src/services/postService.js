const Post = require("../models/Post");

exports.create = (createData) => Post.create(createData);

// exports.getAll = () => Creature.find().lean();

// exports.getSingleCreature = (creatureId) =>
//   Creature.findById(creatureId).populate("owner").populate("votes");

// exports.update = (creatureId, creatureData) =>
//   Creature.findByIdAndUpdate(creatureId, creatureData, { runValidators: true });

// exports.delete = (creatureId) => Creature.findByIdAndDelete(creatureId);

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
