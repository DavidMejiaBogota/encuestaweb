//Importaciones de terceros
import express, {Application} from 'express';
import userRoutes from '../routes/personas';
import cors from 'cors';

//importanciones propias
import db from '../db/connetion';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = { //defnición de las rutas
        usuarios: '/api/personas'  
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        //Métodos iniciales
        this.dbConnection(); //Llamado al método de conección a la base de datos.
        this. middelwares(); // Llamado al metodo de middlewares.
        this.routes(); // Llamado al metodo de rutas.
    };

    //Conectar base de datos

    async dbConnection() {
        try {
        await db.authenticate();
        console.log('Database Online');
        } catch (error) {
            throw new Error('Error en la base de datos: ' + error);           
        }
    }


    middelwares() {
        //Configuración del CORS
        this.app.use(cors());

        //Lectura del body
        this.app.use(express.json());

        //Carpeta pública
        this.app.use(express.static('public'));
    };

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes)
    };

    listen() {
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto: ' + this.port);
        });
    }

}
export default  Server;