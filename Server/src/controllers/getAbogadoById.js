const { Abogado } = require('../db')

const getAbogadoById = async (id)=>{
    // console.log(id)
    const abogado = await Abogado.findByPk(id.toUpperCase());
    if(!abogado) throw Error("Abogado no Registrado o no existe")
    return abogado;
}

module.exports ={
    getAbogadoById,
}