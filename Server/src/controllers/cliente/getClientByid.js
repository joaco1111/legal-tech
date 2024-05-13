const { Cliente } = require("../../DB");

const getClientById = async (cedulaCliente) => {
  const cliente = await Cliente.findOne({
    where: {
      cedulaCliente,
      activo: true,
    },
  });
  return cliente;
};

module.exports = {
  getClientById,
};
