const { Router } = require("express");
const authControllers = require("../functions/authControllers");
const router = Router();

router.post("/signup", authControllers.signup);

router.post("/login", authControllers.login);

module.exports = router;