const { Router } = require("express");
const authControllers = require("../functions/authControllers");
const router = Router();

router.post("/signup", authControllers.signup);

router.post("/login", authControllers.login);

router.get("/logout", authControllers.logout);

//router.get("/verifyuser", authControllers.verifyuser);

router.get("/verifyuserobject", authControllers.verifyuserObject);

module.exports = router;