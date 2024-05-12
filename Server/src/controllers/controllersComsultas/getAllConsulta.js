const { Consulta } = require("../../DB");

const getAllConsulta = async () => {
  const getAllConsultaBd = await Consulta.findAll();

  return getAllConsultaBd;
};

module.exports = {
  getAllConsulta,
};
