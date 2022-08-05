import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Layouts/Home';
import Login from './Layouts/Login';
import { LoginProvider } from './context/LoginContext';
import Admin from './Layouts/Admin';
import CreatePost from './AdminLayout/CreatePost';
import PrivateRoute from './Routes/PrivateRoute';
import { useEffect } from 'react';


function App() {
  console.log(localStorage.getItem("loggedPostAppUser"));
  if (localStorage.getItem("loggedPostAppUser")) {
    setTimeout(() => {
      localStorage.clear();
    }, 15000);
  }

  return (
    <>
      <BrowserRouter>
        <LoginProvider>
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
            </Routes>
          </>
        </LoginProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
