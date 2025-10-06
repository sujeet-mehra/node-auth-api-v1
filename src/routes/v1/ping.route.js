const { Router } = require("express");
const pingRouter = Router();
const { pingController } = require("../../controllers");

// http://localhost:4001/api/v1/ping/
pingRouter.get("/", pingController);

module.exports = pingRouter;
