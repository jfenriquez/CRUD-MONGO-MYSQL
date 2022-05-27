///import { append } from "express/lib/response";
import BlogModel from "../models/Blog_Models.js";
//////metodos para el crud

////////MOSTRAR TODO
export const getAllBlog=async(req, res) =>{
    try{
       const blogs=await BlogModel.findAll()
       res.json(blogs);
    } catch (error) {
        res.json({message: error.message});
    }
}

////MOSTRAR_get:id
export const getBlogById=async(req, res) =>{
    try{
        const blog=await BlogModel.findAll({where:{id: req.params.id}})
        res.json(blog[0]);
    }catch(error){
        res.json({message: error.message});
    } 
}

/////CREAR
export const createBlog=async(req, res) =>{
    try{
        await BlogModel.create(req.body)
        res.json({
            "message":"REGISTRO CREADO CORRECTAMENTE"
        })
    }catch(error){
        res.json({message: error.message});
    }    
}

/////UPDATE
export const updateBlog=async(req, res)=>{
    try{
      await  BlogModel.update(req.body,{where:{id: req.params.id}})
      res.json({
          "mensaje":"REGISTRO ACTUALIZADO CORRECTAMENTE"
      });
    }catch(error){
        res.json({message: error.message});
    }
}

////////DELETE
export const deleteBlog=async(req, res)=>{
    try {
        await BlogModel.destroy({
            where:{id:req.params.id}
        })
        res.json({
            "mensaje":"REGISTRO ELIMINADO CORRECTAMENTE"
        });
    } catch (error) {
        res.json({message: error.message});
    }
}





