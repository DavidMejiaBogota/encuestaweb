import {DataTypes} from 'sequelize';
import db from '../db/connetion';

const Persona = db.define('Persona', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    fecha_nacimiento: {
        type: DataTypes.DATE
    },
    direccion: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    movil1: {
        type: DataTypes.STRING
    },
    movil2: {
        type: DataTypes.STRING
    },
    telefono_fijo1:{
        type: DataTypes.STRING
    },
    telefono_fijo2:{
        type: DataTypes.STRING
    },
    genero: {
        type: DataTypes.RANGE(DataTypes.ENUM('masculino', 'femenino'))
    },
    estado:{
        type: DataTypes.TINYINT
    }
});

export default Persona;