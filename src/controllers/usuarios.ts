import { Request, Response } from "express";

//Función para obtener todos los usuarios
export const getUsuarios = (req: Request, res: Response) => {
    res.json({
        msg: 'getUsuarios'
    });
};

//Función para obtener un usuario
export const getUsuario = (req: Request, res: Response) => {
    const {id} = req.params;

    res.json({
        msg: 'getUsuario',
        id
    });
};

//Función para crear un usuario
export const createUsuario = (req: Request, res: Response) => {
    const {body} = req;

    res.json({
        msg: 'createUsuario',
        body
    });
};

//Función para actualizar un usuario
export const updateUsuario = (req: Request, res: Response) => {
    
    const {id } = req.params;
    const {body} = req;

    res.json({
        msg: 'updateUsuario',
        body,
        id
    });
};

//Función para eleminar un usuario
export const deleteUsuario = (req: Request, res: Response) => {
    
    const {id } = req.params;

    res.json({
        msg: 'deleteUsuario',
        id
    });
};