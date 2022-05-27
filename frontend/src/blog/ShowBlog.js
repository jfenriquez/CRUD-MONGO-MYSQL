import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {FaTrash,FaPlusSquare} from 'react-icons/fa';
import {BsPencilSquare} from 'react-icons/bs';

const URI = "http://localhost:8060/blogs/";

const CompShowBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);
  ///////////async procedimiento para mostrar todo
  const getBlogs = async () => {
    const res = await axios.get(URI);
    setBlogs(res.data);
  };
  //////deleteBlog
  const deleteBlog =async (id) => {
    await axios.delete(`${URI}${id}`);
    getBlogs();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/create" className="btn btn-primary mt-2 mb-2"><FaPlusSquare/></Link>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">TITLE</th>
                <th scope="col">CONTEND</th>
                <th scope="col">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.title}</td>
                  <td>{blog.content}</td>
                  <td>
                    <Link to={`/edit/${blog.id}`} className="btn btn-info">
                    <BsPencilSquare/>
                    </Link>
                    <br></br>
                    <button
                      onClick={() => deleteBlog(blog.id)}
                      className="btn btn-danger"
                    >
                      <FaTrash/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompShowBlog;
