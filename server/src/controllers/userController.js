const router = require("express").Router();
const userService = require("../services/userService");
const { extractErrorMsgs } = require("../utils/errorHandler");

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password, repeatPassword } = req.body;

  try {
    await userService.register({
      firstName,
      lastName,
      email,
      password,
      repeatPassword,
    });

    // res.redirect("/users/login");
  } catch (error) {
    const errorMessages = extractErrorMsgs(error);
    res.status(404).render("user/register", { errorMessages });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await userService.login(email, password);

    res.cookie("token", token, { httpOnly: true });
    // res.redirect("/");
  } catch (error) {
    const errorMessages = extractErrorMsgs(error);
    console.log(errorMessages)
    // res.status(404).render("user/login", { errorMessages });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  // res.redirect("/");
});

module.exports = router;
