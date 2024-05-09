const { Abogado } = require("../db");

const createAbogadoBd = async (id, matricula, nombre, apellido, correo, telefono, calle, numero,codigo_postal, ciudad, pais) => {
    // console.log('imagen',imagen)

    const newAbogado = await Abogado.create({id, matricula, nombre, apellido, correo, telefono, calle, numero, codigo_postal, ciudad, pais})
   
    //  newAbogado.addCliente(clientes);
   
    return newAbogado
    
    // return await Abogado.create({nombre, duracion,dificultad, temporada}); //?ASI También puede ser
     
};


module.exports = {createAbogadoBd};