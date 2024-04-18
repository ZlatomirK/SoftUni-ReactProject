const router = require("express").Router();
const userService = require("../services/userService");
const { extractErrorMsgs } = require("../utils/errorHandler");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const { userName, email, password, confirmPassword } = req.body;

    //these dont work
    // if (!userName || !email || !password || !confirmPassword) {
    //   return res
    //     .status(400)
    //     .json({ message: "Please provide all required fields." });
    // }

    // if (password !== confirmPassword) {
    //   return res.status(400).json({ message: "Passwords do not match." });
    // }

    // const existingUser = await User.findOne({ email });
    // if (existingUser) {
    //   return res
    //     .status(400)
    //     .json({ message: "User with this email already exists." });
    // }

    const registerSuccess = await userService.register({
      userName,
      email,
      password,
      confirmPassword,
    });

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await userService.login(email, password);

    res.status(201).json({ message: "User logged in successfully.", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(201).json({ message: "Logout succcesful" });
});

router.post("/decode", (req, res) => {
  const { token } = req.body;
  const decodedToken = jwt.decode(token);
  res.status(201).json(decodedToken);
});

module.exports = router;
