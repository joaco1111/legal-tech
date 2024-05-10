const { Abogado } = require('../db')

const getAllAbogados = async ()=>{
    const getAllAbogadosBd = await Abogado.findAll({
        where: {
          activo: true,
        },
      });

    return getAllAbogadosBd;
};


module.exports = {
    getAllAbogados,
}
