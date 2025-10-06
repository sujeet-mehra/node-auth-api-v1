const { Router } = require("express");
const authRouter = Router();
const { authController } = require("../../controllers/index");

// http://localhost:4001/api/v1/auth/signup
authRouter.post("/signup", authController.signupController);
// http://localhost:4001/api/v1/auth/login
// authRouter.get("/login", authController.loginController);

module.exports = authRouter;
