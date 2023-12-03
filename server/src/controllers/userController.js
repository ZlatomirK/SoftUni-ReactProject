const router = require("express").Router();
const userService = require("../services/userService");
const { extractErrorMsgs } = require("../utils/errorHandler");
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const { userName, email, password, confirmPassword } = req.body;

    // Validate if required fields are provided
    if (!userName || !email || !password || !confirmPassword) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields." });
    }

    // Validate if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match." });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists." });
    }

    const token = await userService.register({ userName, email, password, confirmPassword });
    res.cookie("token", token, { httpOnly: true });

    // Send a success response
    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const token = await userService.login(email, password);

//     res.cookie("token", token, { httpOnly: true });
//     // res.redirect("/");
//   } catch (error) {
//     const errorMessages = extractErrorMsgs(error);
//     console.log(errorMessages)
//     // res.status(404).render("user/login", { errorMessages });
//   }
// });

// router.get("/logout", (req, res) => {
//   res.clearCookie("token");
//   // res.redirect("/");
// });

module.exports = router;
