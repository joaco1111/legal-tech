const { Cliente} = require('../DB')

const getClienteById = async (cedulaCliente)=>{
    // console.log(id)
    const cliente = await Cliente.findByPk(parseInt(cedulaCliente), {
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