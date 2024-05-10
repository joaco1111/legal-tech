const { Caso } = require("../DB");

const createCaso = async (cedulaCliente,cedulaAbogado, fecha, fechaFin, descripcion,TipoDeCasoId) => {
    // console.log('imagen',imagen)
    
    const newCaso = await Caso.create({cedulaCliente,cedulaAbogado, fecha, fechaFin, descripcion,TipoDeCasoId})

    //  newAbogado.addCliente(clientes);
   
    return newCaso
    
    // return await Abogado.create({nombre, duracion,dificultad, temporada}); //?ASI También puede ser
     
};


module.exports = {createCaso};