const { Router } = require("express");
const baseRouter = Router();

const pingRoutes = require("./ping.route");
const authRoutes = require("./auth.route");

// http://localhost:4001/api/v1/ping
baseRouter.use("/ping", pingRoutes);
// http://localhost:4001/api/v1/auth
baseRouter.use("/auth", authRoutes);

module.exports = baseRouter;
