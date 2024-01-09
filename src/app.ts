import dotenv from 'dotenv';
import Server from './models/server';
//import Server from '../src/models/server';
dotenv.config();

const server = new Server();

server.listen();