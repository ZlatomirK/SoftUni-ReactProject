const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");
const { SECRET } = require("../constants");

exports.register = async (userData) => {
  const user = User.create(userData);

  const payload = { _id: user._id, email: user.email };

  const token = await jwt.sign(payload, SECRET, { expiresIn: "2d" });

  return token;
};

exports.login = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid email or password!");
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Invalid email or password!");
  }

  const payload = { _id: user._id, email: user.email };

  const token = await jwt.sign(payload, SECRET, { expiresIn: "2d" });

  return token;
};
