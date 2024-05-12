const { where } = require("sequelize");
const { Cliente } = require("../../DB");

const getAllClientes = async (filters) => {
  const newFilters = {};
  const newOrder = {};
  const order = [];
  // const cliente = await Cliente.findAll({

  if (filters.field) {
    const ord = filters.order?.toUpperCase() || "ASC";
    order.push([filters.field, ord]);
  }

  delete filters.order;
  delete filters.field;

  Object.entries(filters).forEach(([field, value]) => {
    if (value) {
      if (value === "ord") {
        newOrder[field.substring(0, field.length - 3)];
      } else {
        newFilters[field] = value;
      }
    }
  });

  const getAllClientesBd = await Cliente.findAll({
    where: {
      activo: true,
      ...newFilters,
    },
    order,
  });
  if (!cliente) throw new Error("Clientes no resgistrado o no existe");
  return cliente;
};

module.exports = {
  getAllClientes,
};
