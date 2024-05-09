const { Cliente } = require('../db')

const getAllClientes = async () =>{
    const cliente = await Cliente.findAll()
    if(!cliente) throw new Error('Clientes no resgistrado o no existe')
    return cliente
}

module.exports = {
    getAllClientes
}