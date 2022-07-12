import './App.css';
import Categories from './components/Categories';
import Hero from './components/Hero';
import Navbar from './components/NavBar';
import Tags from './components/Tags';
import PostContainer from './containers/PostContainer';
import Buscador from './components/Buscador';
import MasVistos from './components/MasVistos';



function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Categories />
    {/* <PostContainer title={'Últimos Posts'} btnTitle={'Ver más'} /> */}
    {/* <PostContainer title={'Más Leidos'} btnTitle={'Ver más'} /> */}
    <MasVistos />
    <Tags title={'Tags'}/>
    <Buscador />
    </>
  );
}

export default App;
