const { Router } = require("express");
const baseRouter = Router();

const pingRouter = require("./ping.route");

// http://localhost:4001/api/v1/ping
baseRouter.use("/ping", pingRouter);

module.exports = baseRouter;