import logo from './logo.svg';
import './App.css';
import Blogs from './blog/ShowBlog';
import Create from './blog/CreateBlog';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import EditBlog from './blog/EditBlog';
 
   
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CRUD REACT NODE (MYSQL Y MONGO)</h1>
      </header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blogs/>}> </Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/edit/:id" element={<EditBlog/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
