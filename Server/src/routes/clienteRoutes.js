// const { Router } = require("express");
// const { getClientesHandler, postClienteHandler } = require('../handlers/clientesHandlers')

// const clientesRoutes = Router();

// clientesRoutes.get("/",getClientesHandler );

// // clientesRoutes.get("/cedulaCliente", );

// clientesRoutes.post("/",postClienteHandler );

// module.exports = clientesRoutes;

const { Router } = require("express");

const { clientesDetailHandler, clientesHandler, postClientesHandler, postEliminaClientes,postActualizaClientes } = require("../handlers/clientesHandlers");

const clientesRouter = Router();


clientesRouter.get("/", clientesHandler);

clientesRouter.get("/:id", clientesDetailHandler);

clientesRouter.post("/", postClientesHandler);

const { getClientesHandler, postClienteHandler, getClientByIDHandler, deleteClienteHandler, getClientByEmailHandler } = require('../handlers/clientesHandlers')


clientesRouter.post("/elimina", postEliminaClientes);

clientesRouter.post("/actualiza", postActualizaClientes);


lientesRoutes.get("/cedulaCliente", getClientByIDHandler);




module.exports = clientesRouter;

