"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.updateUsuario = exports.createUsuario = exports.getUsuario = exports.getUsuarios = void 0;
//Función para obtener todos los usuarios
const getUsuarios = (req, res) => {
    res.json({
        msg: 'getUsuarios'
    });
};
exports.getUsuarios = getUsuarios;
//Función para obtener un usuario
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getUsuario',
        id
    });
};
exports.getUsuario = getUsuario;
//Función para crear un usuario
const createUsuario = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'createUsuario',
        body,
    });
};
exports.createUsuario = createUsuario;
//Función para actualizar un usuario
const updateUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'updateUsuario',
        body,
        id
    });
};
exports.updateUsuario = updateUsuario;
//Función para eleminar un usuario
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUsuario',
        id
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map