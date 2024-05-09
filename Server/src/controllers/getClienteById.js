const { Cliente} = require('../DB')

const getClienteById = async (cedula_cliente)=>{
    // console.log(id)
    const cliente = await Cliente.findByPk(parseInt(cedula_cliente), {
        // include: {
        //     model: Abogado, 
        //     attributes: ["nombre", "dificultad", "duracion", "temporada", "imagen"],
        //     through:{
        //         attributes: [],
        //     },
        // },
    });
    if(!cliente) throw Error("Cliente no Registrado o no existe")
    return cliente;
}

module.exports ={
    getClienteById,
}