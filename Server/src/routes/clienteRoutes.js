const { Router } = require("express");
const { getClientesHandler, postClienteHandler, getClientByIDHandler, deleteClienteHandler } = require('../handlers/clientesHandlers')

const clientesRoutes = Router();

clientesRoutes.get("/",getClientesHandler );

clientesRoutes.get("/cedulaCliente", getClientByIDHandler );

clientesRoutes.post("/",postClienteHandler );

clientesRoutes.post("/delete",deleteClienteHandler );

module.exports = clientesRoutes;