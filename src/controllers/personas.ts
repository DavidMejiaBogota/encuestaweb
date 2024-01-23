import { Request, Response } from "express";
import Persona from "../models/persona";

//Función para obtener todos los usuarios
export const getPersonas = async (req: Request, res: Response) => {

    const personas = await Persona.findAll();

    res.json({personas});
};

//Función para obtener un usuario
export const getPersona = async (req: Request, res: Response) => {
    const {id} = req.params;

    const persona = await Persona.findByPk(id);

    if (persona) {
        res.json(persona);
    }else {
        res.status(404).json({
            msg: `No existe un usuario con el id: ${id}`
        });
    }
};

//Función para crear un usuario
export const createPersona = async (req: Request, res: Response) => {
    const {body} = req;

    try {
        const persona = new Persona();
        await persona.save();
        res.json(persona);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
};

//Función para actualizar un usuario
export const updatePersona = (req: Request, res: Response) => {
    
    const {id_persona} = req.params;
    const {body} = req;

    res.json({
        msg: 'updateUsuario',
        body,
        id_persona
    });
};

//Función para eleminar un usuario
export const deletePersona = (req: Request, res: Response) => {
    
    const {id_persona } = req.params;

    res.json({
        msg: 'deleteUsuario',
        id_persona
    });
};