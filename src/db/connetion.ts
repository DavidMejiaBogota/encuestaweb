import { Sequelize } from "sequelize";

const db = new Sequelize('encuestaweb', 'root', 'Popepi2607*', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

export default db;