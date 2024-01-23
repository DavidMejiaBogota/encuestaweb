import { DataTypes, Model } from 'sequelize';
import db from '../db/connetion';

interface PersonaAttributes {
    id_persona: number;
    nombre: string;
    apellido: string;
    fecha_nacimiento: Date;
    direccion: string;
    email: string;
    movil1: string;
    movil2: string;
    telefono_fijo1: string;
    telefono_fijo2: string;
    genero: 'masculino' | 'femenino';
    estado: number;
}

class Persona extends Model<PersonaAttributes> {}

Persona.init({
    id_persona: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    apellido: {
        type: DataTypes.STRING,
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
    },
    direccion: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    movil1: {
        type: DataTypes.STRING,
    },
    movil2: {
        type: DataTypes.STRING,
    },
    telefono_fijo1: {
        type: DataTypes.STRING,
    },
    telefono_fijo2: {
        type: DataTypes.STRING,
    },
    genero: {
        type: DataTypes.ENUM('masculino', 'femenino'),
    },
    estado: {
        type: DataTypes.TINYINT,
    },
}, {
    sequelize: db,
    modelName: 'Persona',
});

export default Persona;
