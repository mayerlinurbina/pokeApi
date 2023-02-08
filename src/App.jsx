import {Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar';
import Home from './pages/Home';
import PokemonDetalle from './pages/PokemonDetalle';
import Pokemones from './pages/Pokemones';

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pokemones' element={<Pokemones/>}/>
      <Route path='/pokemones/:nombre' element={<PokemonDetalle/>}/>
    </Routes>
    </>

  )
}

export default App
