const { getAbogadoById } = require("../controllers/getAbogadoById");
const { getAllAbogados } = require("../controllers/getAllAbogados");
const { createAbogadoBd } = require("../controllers/postAbogadosController");

const getAbogadosHandler = async (req, res)=>{
    try {
        const response = await getAllAbogados()
        res.status(200).json(response);
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// Creando Abogados
const postAbogadosHandler = async (req, res)=>{
    const { 
        id, 
        matricula, 
        nombre, 
        apellido, 
        correo, 
        telefono, 
        calle, numero, 
        codigo_postal, 
        ciudad, 
        pais 
    } = req.body;

    try {
        const response = await createAbogadoBd(id, matricula, nombre, apellido, correo, telefono, calle, numero, codigo_postal, ciudad, pais);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    // res.status(200).send(`creando actividades`);
};

const getAbogadoDetailHandler = async (req, res)=>{
    const {id} = req.params;
    
    try {
        const response = await getAbogadoById(id);
        res.status(200).json(response);
    
    } catch (error) {
        res.status(400).json(error = error.message)
    }
}


module.exports = {
    getAbogadosHandler,
    getAbogadoDetailHandler,
    postAbogadosHandler,
    
}