const { Router } = require("express");
const { getClientesHandler, postClienteHandler } = require('../handlers/clientesHandlers')

const clientesRoutes = Router();

clientesRoutes.get("/",getClientesHandler );

// clientesRoutes.get("/cedulaCliente", );

clientesRoutes.post("/",postClienteHandler );

module.exports = clientesRoutes;