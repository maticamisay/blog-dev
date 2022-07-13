import './App.css';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ContainerPost from './containers/ContainerPost';
import ContainerTag from './containers/ContainerTag';
import Buscador from './components/Buscador';



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <ContainerPost title={'Ultimos Posts'} titleBtn={'Ver más'} />
      <ContainerPost title={'Posts más leídos'} titleBtn={'Ver más'} />
      <ContainerTag />
      <Buscador />
    </>
  );
}

export default App;
