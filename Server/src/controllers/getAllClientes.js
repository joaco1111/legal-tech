const { Cliente } = require("../db_conn");

const getAllClientes = async () => {
  const cliente = await Cliente.findAll({
    where: {
      activo: true,
    },
  });
  if (!cliente) throw new Error("Clientes no resgistrado o no existe");
  return cliente;
};

module.exports = {
  getAllClientes,
};
