const { Consulta } = require('../db')

const getAllConsulta = async ()=>{
    const getAllConsultaBd = await Consulta.findAll();

    return getAllConsultaBd;
};


module.exports = {
    getAllConsulta,
}