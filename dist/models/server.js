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
//Importaciones de terceros
const express_1 = __importDefault(require("express"));
const personas_1 = __importDefault(require("../routes/personas"));
const cors_1 = __importDefault(require("cors"));
//importanciones propias
const connetion_1 = __importDefault(require("../db/connetion"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/personas'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        //Métodos iniciales
        this.dbConnection(); //Llamado al método de conección a la base de datos.
        this.middelwares(); // Llamado al metodo de middlewares.
        this.routes(); // Llamado al metodo de rutas.
    }
    ;
    //Conectar base de datos
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connetion_1.default.authenticate();
                console.log('Database Online');
            }
            catch (error) {
                throw new Error('Error en la base de datos: ' + error);
            }
        });
    }
    middelwares() {
        //Configuración del CORS
        this.app.use((0, cors_1.default)());
        //Lectura del body
        this.app.use(express_1.default.json());
        //Carpeta pública
        this.app.use(express_1.default.static('public'));
    }
    ;
    routes() {
        this.app.use(this.apiPaths.usuarios, personas_1.default);
    }
    ;
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map