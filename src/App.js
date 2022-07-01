import './App.css';
import Categories from './components/Categories';
import Hero from './components/Hero';
import Navbar from './components/NavBar';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Categories />
    <h1 className='bg-light'>Hola</h1>
    </>
  );
}

export default App;
