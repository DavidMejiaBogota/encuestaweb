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
export const createPersona = async(req: Request, res: Response) => {
    
    const { body } = req;
    
    try {
        
    const  existEmail = await Persona.findOne({
        where: {
            email: body.email
        }
    });

    if (existEmail) {
       return res.status(400).json({
        msg: `Ya existe un usuario con el email: ${body.email}`,
       });
    }

        const persona = new Persona(body);
        await persona.save();
        res.json(persona);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'El campo email es necesario'
        });    
    }
};

//Función para actualizar un usuario
export const updatePersona = async (req: Request, res: Response) => {
    
    const {id} = req.params;
    const {body} = req;

    try {

        const persona = await Persona.findByPk(id);
        if (!persona){
            return res.status(404).json({
                msg:`No existe un usuario con el id ${id}`
            });
        }
        
        await persona.update(body);
        res.json({persona});

        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'El campo email es necesario'
            });    
        }
};

//Función para eleminar un usuario
export const deletePersona = async (req: Request, res: Response) => {
    
    const {id} = req.params;

    const persona = await Persona.findByPk(id);
    if (!persona) {
        return res.status(404).json({
            msg: `No existe un usuario con el id: ${id}`
        });
    }

    await persona.destroy();

    res.json(persona);
};