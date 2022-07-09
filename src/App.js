import './App.css';
import Categories from './components/Categories';
import Hero from './components/Hero';
import Navbar from './components/NavBar';
import UltimosPosts from './containers/ultimosPosts';


function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Categories />
    <UltimosPosts />
    </>
  );
}

export default App;
