import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Layouts/Home';
import Login from './Layouts/Login';
import LoginContext, { LoginProvider } from './context/LoginContext';
import Admin from './Layouts/Admin';
import CreatePost from './AdminLayout/CreatePost';
import PrivateRoute from './Routes/PrivateRoute';
import { useContext } from 'react';


function App() {
  const { isLoggedIn } = useContext(LoginContext)
  return (
    <>
      <BrowserRouter>
        <LoginProvider>
          <>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='/admin/create'
                // element={<CreatePost />} 
                // element={
                //   isLoggedIn
                //     ? <CreatePost />
                //     : <Navigate exact to={'/login'} replace
                //     />}
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
