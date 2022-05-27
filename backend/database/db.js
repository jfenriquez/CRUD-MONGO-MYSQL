import { Sequelize } from "sequelize";

const db=new Sequelize('base_blog','root','',{
    host:'localhost',
    port:'3306',
    dialect:'mysql'
});

export default db;
//////exportamos db 