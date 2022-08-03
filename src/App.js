import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Layouts/Home';
import Login from './Layouts/Login';
import { LoginProvider } from './context/LoginContext';
import Admin from './Layouts/Admin';
import CreatePost from './AdminLayout/CreatePost';


function App() {

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
              <Route path='/admin/create' element={<CreatePost />} />
            </Routes>
          </>
        </LoginProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
