const { Router } = require("express");
const v1Router = Router();

const v1AllRoutes = require("./v1");

// http://localhost:4001/api/v1
v1Router.use("/v1", v1AllRoutes);

module.exports = v1Router;