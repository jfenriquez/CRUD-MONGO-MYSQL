import mongoose from "mongoose";
const url='mongodb+srv://john:password@cluster0.r2krzlr.mongodb.net/mern'
mongoose.connect(url);
const db=mongoose.connection
db.on('open',()=>{console.log("conectado a mongo")})
db.on('error',()=>{console.log("error conectando a mongo")})
  

export default db;
//////exportamos db 