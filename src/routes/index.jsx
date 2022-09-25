import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InputSearch from '../components/InputSearch'
import Navbar from '../layout/Navbar'
import HomePage from '../pages/HomePage'
import SearchGifs from '../pages/SearchGifs'
import StickersPage from '../pages/StickersPage'

export default function RoutesApp () {
  return (
    <BrowserRouter>
      <Navbar />
      <InputSearch />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/reactions' element='Reactions' />
        <Route path='/entertainment' element='entertainment' />
        <Route path='/sports' element='sports' />
        <Route path='/stickers' element={<StickersPage />} />
        <Route path='/artist' element='artis' />
        <Route path='/search/:gifs' element={<SearchGifs />} />
        <Route path='/hola2' element='hola2' />
      </Routes>
    </BrowserRouter>
  )
}
