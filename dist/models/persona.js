"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connetion_1 = __importDefault(require("../db/connetion"));
class Persona extends sequelize_1.Model {
}
Persona.init({
    id_persona: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING,
    },
    fecha_nacimiento: {
        type: sequelize_1.DataTypes.DATE,
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    movil1: {
        type: sequelize_1.DataTypes.STRING,
    },
    movil2: {
        type: sequelize_1.DataTypes.STRING,
    },
    telefono_fijo1: {
        type: sequelize_1.DataTypes.STRING,
    },
    telefono_fijo2: {
        type: sequelize_1.DataTypes.STRING,
    },
    genero: {
        type: sequelize_1.DataTypes.ENUM('masculino', 'femenino'),
    },
    estado: {
        type: sequelize_1.DataTypes.TINYINT,
    },
}, {
    sequelize: connetion_1.default,
    modelName: 'Persona',
});
exports.default = Persona;
//# sourceMappingURL=persona.js.map