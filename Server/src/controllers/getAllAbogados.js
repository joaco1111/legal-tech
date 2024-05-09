const { Abogado } = require('../DB')

const getAllAbogados = async ()=>{
    const getAllAbogadosBd = await Abogado.findAll();

    return getAllAbogadosBd;
};


module.exports = {
    getAllAbogados,
}