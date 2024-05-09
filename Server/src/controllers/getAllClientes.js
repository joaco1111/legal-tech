const { Cliente } = require('../DB');

const getAllCliente = async(offset,porPagina)=>{
   
   
         const allClient=await Cliente.findAll({
            limit: porPagina,
            offset: offset,
         });
         return (allClient)
   
 }

module.exports = {
    getAllCliente
}