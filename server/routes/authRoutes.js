const { Router } = require("express");
const authControllers = require("../functions/authControllers");
const router = Router();

router.post("/signup", authControllers.signup)

module.exports = router;