///import { append } from "express/lib/response";
import BlogModel from "../models/Blog_Models.js";
//////metodos para el crud

////////MOSTRAR TODO
export const getAllBlog=async(req, res) =>{
    try{
       const blogs=await BlogModel.find()
       res.status(200).json(blogs);
    } catch (error) {
        res.json({message: error.message});
    }
}

////MOSTRAR_get:id
export const getBlogById=async(req, res) =>{
    try{
        const id =req.params.id
        await BlogModel.findById({_id:id}).then((blog) => {
            res.status(200).json(blog);
        })
        
    }catch(error){
        res.json({message: error.message});
    } 
}

/////CREAR
export const createBlog=async(req, res) =>{
    try{
        await BlogModel.create(req.body)
        res.status(200).json({
            "message":"REGISTRO CREADO CORRECTAMENTE"
        })
    }catch(error){
        res.json({message: error.message});
    }    
}

/////UPDATE
export const updateBlog=async(req, res)=>{
    try{
      const id = req.params.id;
      await  BlogModel.updateOne({_id:id},req.body).then(res=>{
          console.log(res);
      })
      res.status(200).json({
          "mensaje":"REGISTRO ACTUALIZADO CORRECTAMENTE"
      });
    }catch(error){
        res.json({message: error.message});
    }
}

////////DELETE
export const deleteBlog=async(req, res)=>{
    try {
        const id = req.params.id;
        await BlogModel.deleteOne({_id:id}).then(res=>{
            console.log(res);
        })
        res.json({
            "mensaje":"REGISTRO ELIMINADO CORRECTAMENTE"
        });
    } catch (error) {
        res.json({message: error.message});
    }
}





