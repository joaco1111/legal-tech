const { Router } = require("express");
const { createCasosHandler } = require("../handlers/casosHandlers");

const casosRouter = Router();

casosRouter.post("/", createCasosHandler);
