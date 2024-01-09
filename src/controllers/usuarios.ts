import { Request, Response } from "express";

export const getUsuarios = (req: Request, res: Response) => {
    res.json({
        msg: 'getUsuarios'
    });
};

export const getUsuario = (req: Request, res: Response) => {
    const {id} = req.params;

    res.json({
        msg: 'getUsuario',
        id
    });
};

export const createUsuario = (req: Request, res: Response) => {
    const {body} = req;

    res.json({
        msg: 'createUsuario',
        body
    });
};

export const updateUsuario = (req: Request, res: Response) => {
    
    const {id } = req.params;
    const {body} = req;

    res.json({
        msg: 'updateUsuario',
        body,
        id
    });
};

export const deleteUsuario = (req: Request, res: Response) => {
    
    const {id } = req.params;

    res.json({
        msg: 'deleteUsuario',
        id
    });
};