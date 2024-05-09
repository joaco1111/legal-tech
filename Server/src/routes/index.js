const { Router } = require("express");
const abogadosRouter = require("./abogadosRoutes");

const router = Router();

router.use("/abogados", abogadosRouter);

module.exports = router;