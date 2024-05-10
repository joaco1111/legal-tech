const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Consulta',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        apellido:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1,20]
            }
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1,20]
            }
        },
        correo:{
            type: DataTypes.STRING,
                validate:{
                len: [1,50]
            }
        },
        telefono:{
            type: DataTypes.INTEGER,
        },
        consulta:{
            type: DataTypes.TEXT,
            allowNull: false,
            validate:{
                len: [1,200]
            }
        },
        activo:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    })
}