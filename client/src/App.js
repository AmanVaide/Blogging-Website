import './App.css';
import { Routes, Route,Navigate } from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Create from './pages/create/Create';
import BlogDetails from './pages/blogDetails/BlogDetails';
import UpdateBlog from './pages/updateBlog/UpdateBlog';
import { useSelector } from 'react-redux';
import About from './pages/about/About';

function App() {
  const { user } = useSelector((state) => state.auth)

  return (
    <div>
      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={ <Login /> } />
        {/* <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} /> */}
        {/* <Route path='/register' element={!user ? <Register /> : <Navigate to='/login' />} /> */}
        <Route path='/register' element={ <Register /> } />
        <Route path='/create' element={user ? <Create /> : <Navigate to='/login' />} />
        <Route path='/blogDetails/:id' element={user ? <BlogDetails /> : <Navigate to='/login' />} />
        <Route path='/updateBlog/:id' element={user ? <UpdateBlog /> : <Navigate to='/login' />} />
        <Route path='/about' element={ <About /> } />
      </Routes>
    </div>
  );
}

export default App;
