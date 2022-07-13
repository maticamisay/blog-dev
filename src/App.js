import './App.css';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ContainerPost from './containers/ContainerPost';
import ContainerTag from './containers/ContainerTag';
import ContainerSuscribirse from './containers/ContainerSuscribirse';
import ContainerBuscador from './containers/ContainerBuscador';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <ContainerPost title={'Ultimos Posts'} titleBtn={'Ver más'} />
      <ContainerPost title={'Posts más leídos'} titleBtn={'Ver más'} />
      <ContainerTag title={'Busca por nuestros tags'} />
      <ContainerSuscribirse title={'¡Suscribete a nuestro canal de noticias!'}
        description={'Para no perderte nada del mejor blog sobre programación, diseño y más.'}
      />
      <ContainerBuscador />
      <Footer />
    </>
  );
}

export default App;
