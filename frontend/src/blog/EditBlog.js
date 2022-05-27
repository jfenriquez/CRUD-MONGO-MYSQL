import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";

const URI = "http://localhost:8060/blogs/";

const EditBlog = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate()    
    const {id}=useParams();

    ///////procedimito para actualizar
    const update=async(e) => {
        e.preventDefault();
        await axios.put(URI+id,{
            title: title,
            content: content
        })
        navigate('/')
    }
    useEffect(() => {
    getBlogById();        
    },[]);


    const  getBlogById=async()=>{
        const res=await axios.get(URI+id)
        setTitle(res.data.title)
        setContent(res.data.content)
      }

    return ( 
        <>
        <h1>vista crear</h1>
        <h3>EDITAR POST</h3>
        <form onSubmit={update}>
          <div className="mb-3">
            <label className="form-label">TITLE</label>
            <input
            className="form-control"
              value={title}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <div className="mb-3">
            <label className="form-label">CONTEND</label>
            <textarea
            className="form-control"
              value={content}
              type="text"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          
          <button type="onSubmit" className='btn btn-primary'>guardar</button >
  
        </form>
      </>      


     );
}
 
export default EditBlog;