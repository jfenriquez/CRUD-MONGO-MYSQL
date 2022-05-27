///////server
import express from 'express';
import cors from 'cors';
//////import la conexion con la db
import db from './database/db.js';

//////import las rutas de router
import blogRoutes from './routers/routes.js';


const app= express();

//////MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/blogs',blogRoutes);
//////conexion
/* try {
    await db.authenticate()
    console.log('conexion exitosa')
} catch (error) {
    console.log(error)
} */



app.get('/',(req,res)=>{
    res.send("sever up")
})


app.listen(8060,()=>{
    console.log("SERVER UP IN PORT 8060")
})