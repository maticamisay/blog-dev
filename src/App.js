import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Layouts/Home';
import Login from './Layouts/Login';
import LoginContext, { LoginProvider } from './context/LoginContext';
import Admin from './Layouts/Admin';
import CreatePost from './AdminLayout/Components/CreatePost';
import PrivateRoute from './Routes/PrivateRoute';
import { useContext, useEffect } from 'react';
import MisPosts from './AdminLayout/Components/MisPosts';

function App() {
  const { isLogged } = useContext(LoginContext)
  useEffect(() => {
    isLogged()
    console.log('desde useeffect');
  }, [])
  
  return (
    <>
      <BrowserRouter>
        {/* <LoginProvider> */}
          <>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/admin'
                element={
                  <PrivateRoute>
                    <Admin />
                  </PrivateRoute>} />
              <Route path='/admin/create'
                element={
                  <PrivateRoute>
                    <CreatePost />
                  </PrivateRoute>
                }
              />
              <Route path='/admin/myposts'
                element={
                  <PrivateRoute>
                    <MisPosts />
                  </PrivateRoute>
                }
              />
            </Routes>
          </>
        {/* </LoginProvider> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
