const { getAllClientes } = require('../controllers/getAllClientes')
const  { createClienteBd } = require('../controllers/postClientesController')

const getClientesHandler = async (req, res)=>{
    try {
        const response = await getAllClientes()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const postClienteHandler = async (req, res) =>{
    const { cedulaCliente, nombre, apellido, correo, telefono, calle, numero, codigoPostal, ciudad, pais } = req.body
    try {
        const response = await createClienteBd(cedulaCliente, nombre, apellido, correo, telefono, calle, numero, codigoPostal, ciudad, pais)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    getClientesHandler,
    postClienteHandler
}
