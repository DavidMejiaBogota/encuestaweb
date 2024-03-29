"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePersona = exports.updatePersona = exports.createPersona = exports.getPersona = exports.getPersonas = void 0;
const persona_1 = __importDefault(require("../models/persona"));
//Función para obtener todos los usuarios
const getPersonas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const personas = yield persona_1.default.findAll();
    res.json({ personas });
});
exports.getPersonas = getPersonas;
//Función para obtener un usuario
const getPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const persona = yield persona_1.default.findByPk(id);
    if (persona) {
        res.json(persona);
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id: ${id}`
        });
    }
});
exports.getPersona = getPersona;
//Función para crear un usuario
const createPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existEmail = yield persona_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (existEmail) {
            return res.status(400).json({
                msg: `Ya existe un usuario con el email: ${body.email}`,
            });
        }
        const persona = new persona_1.default(body);
        yield persona.save();
        res.json(persona);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'El campo email es necesario'
        });
    }
});
exports.createPersona = createPersona;
//Función para actualizar un usuario
const updatePersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const persona = yield persona_1.default.findByPk(id);
        if (!persona) {
            return res.status(404).json({
                msg: `No existe un usuario con el id ${id}`
            });
        }
        yield persona.update(body);
        res.json({ persona });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'El campo email es necesario'
        });
    }
});
exports.updatePersona = updatePersona;
//Función para eleminar un usuario
const deletePersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const persona = yield persona_1.default.findByPk(id);
    if (!persona) {
        return res.status(404).json({
            msg: `No existe un usuario con el id: ${id}`
        });
    }
    yield persona.destroy();
    res.json(persona);
});
exports.deletePersona = deletePersona;
//# sourceMappingURL=personas.js.map