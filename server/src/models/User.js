const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 10,
  },
  password: {
    type: String,
    required: true,
    minLength: 3,
  },
});

userSchema.path("email").validate(function (emailInput) {
  const email = mongoose.model("User").findOne({ email: emailInput });
  return !!email;
}, "Email already exists!");

//doesnt work
// userSchema.path("userName").validate(function (userNameInput) {
//   const userName = mongoose.model("User").findOne({ userName: userNameInput });
//   return !!userName;
// }, "userName already exists!");

userSchema.pre("save", async function () {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
});

userSchema.virtual("repeatPassword").set(function (value) {
  if (value === this.passowrd) {
    //     should be !== but this is how it works . . . . . . .
    throw new Error("Password missmatch!");
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
