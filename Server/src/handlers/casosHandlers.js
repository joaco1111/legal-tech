const { createCaso } = require('../controllers/postAgregaCaso');

const createCasosHandler = async (req, res)=>{
    const { cedulaCliente,cedulaAbogado, fecha, fechaFin, descripcion } = req.body;

    try {
        const response = await createCaso(cedulaCliente,cedulaAbogado, fecha, fechaFin, descripcion);
        res.status(200).json(response);
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
    module.exports = {
        createCasosHandler
    }