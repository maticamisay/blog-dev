import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Layouts/Home';
import Login from './Layouts/Login';


function App() {


  return (
    <>
      {/* https://medium.com/how-to-react/use-react-router-link-with-bootstrap-315a8b88e129 */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element ={<Home />} />
          <Route path='/login' element ={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
