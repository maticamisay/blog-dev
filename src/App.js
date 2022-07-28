import './App.css';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ContainerPost from './containers/ContainerPost';
import ContainerTag from './containers/ContainerTag';
import ContainerSuscribirse from './containers/ContainerSuscribirse';
import ContainerBuscador from './containers/ContainerBuscador';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import postService from './services/posts';


function App() {
  const [data, setData] = useState('')
  useEffect(() => {
    postService
      .getAll()
      .then(initialPosts => {
        setData(initialPosts)
      })
  }, [])

  return (
    <>
    {/* https://medium.com/how-to-react/use-react-router-link-with-bootstrap-315a8b88e129 */}
      <Navbar />
      <Hero />
      <Categories />
      <ContainerPost title={'Ultimos Posts'} titleBtn={'Ver más'} data={data} />
      <ContainerPost title={'Posts más leídos'} titleBtn={'Ver más'} data={data} />
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
