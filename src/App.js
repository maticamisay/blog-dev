import './App.css';
import Categories from './components/Categories';
import Hero from './components/Hero';
import Navbar from './components/NavBar';
import Tags from './components/Tags';
import Buscador from './components/Buscador';
import MasVistos from './components/MasVistos';
import PostLayout from './Layouts/PostLayout';
import ContainerLayout from './containers/ContainerLayout';



function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Categories />
    <ContainerLayout title={'Ultimos Posts'} titleBtn={'Ver más'}/>
    <ContainerLayout title={'Posts más leídos'} titleBtn={'Ver más'}/>
    <Tags title={'Tags'}/> 
    <Buscador />
    </>
  );
}

export default App;
