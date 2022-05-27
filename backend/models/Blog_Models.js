//////importamos la conexion a la db
import db from '../database/db.js';
/////importamos sequelize
import { DataTypes } from 'sequelize';
/////definir base
const BlogModel=db.define('blogs',{
    title:{type:DataTypes.STRING},
    content:{type:DataTypes.STRING},
})

export default BlogModel;



