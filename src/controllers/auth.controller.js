const { authService } = require("../services");

const signupController = async function (req, res) {
  try {
    const user = await authService(req.body);
    console.log("req body data: ", req.body);
    res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
  }
};

const loginController = async function (req, res) {
  res.send("Login controller");
};

module.exports = { signupController, loginController };
