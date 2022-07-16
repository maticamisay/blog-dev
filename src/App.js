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
import axios from 'axios';



function App() {
  const [data, setData] = useState('')
  const getFecht = async () => {
    try {
      const resp = await fetch('http://localhost:3001/api/posts')
      // const resp = await fetch('https://blog-dev-back.herokuapp.com/')
      const dataParse = await resp.json()
      setData(dataParse)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getFecht()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <ContainerPost title={'Ultimos Posts'} titleBtn={'Ver más'} data={data} />
      <ContainerPost title={'Posts más leídos'} titleBtn={'Ver más'} data={data}/>
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
