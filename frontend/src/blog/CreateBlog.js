import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8060/blogs/";

const CompCrearBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate()    

  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, { title: title, content: content });
    navigate('/')
  };

  return (
    <>
      <h1>vista crear</h1>
      <h3>Create POST</h3>
      <form onSubmit={store}>
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
};

export default CompCrearBlog;
