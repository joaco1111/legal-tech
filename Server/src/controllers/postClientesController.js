const { Cliente } = require('../db')
const sendEmail = require('../email/SendEmail')

const createClienteBd = async (cedulaCliente, nombre, apellido, correo, telefono, calle, numero, codigoPostal, ciudad, pais )=>{
    const newCliente = await Cliente.create({cedulaCliente, nombre, apellido, correo, telefono, calle, numero, codigoPostal, ciudad, pais})
    sendEmail(nombre, correo)
    return {
        ...newCliente.toJSON()
    }
}

module.exports = {
    createClienteBd
}