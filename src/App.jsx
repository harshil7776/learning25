import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { ContentComponet } from './Components/ContentComponet'
import HeaderComponent from './Components/HeaderComponent'
import { FooterComponent } from './Components/FooterComponent'
import { MapDemo } from './Components/MapDemo'
import { MapDemo2 } from './Components/MapDemo2'
import { MapDemo3 } from './Components/MapDemo3'
import { MapDemo4 } from './Components/MapDemo4'
import { MapDemo5 } from './Components/MapDemo5'
import { MapDemo6 } from './Components/MapDemo6'
import { MapDemo7 } from './Components/MapDemo7'
import { MapTask1 } from './Components/MapTask1'
import { MapTask2 } from './Components/MapTask2'
import { Route, Routes } from 'react-router-dom'
import { NetflixHome } from './Components/netflix/NetflixHome'
import { NetflixShows } from './Components/netflix/NetflixShows'
import { Navbar } from './Components/Navbar'
import { Error404 } from './Components/Error404'
import { HomeComponent } from './Components/HomeComponent'
import { PlayContent } from './Components/netflix/PlayContent'
import { NetflixMovies } from './Components/netflix/NetflixMovies'
import { UseStateDemo } from './Components/UseStateDemo'
import { UseStateDemo2 } from './Components/UseStateDemo2'
import { BooksTask1 } from './Components/Books/BooksTask1'
import { BooksDescription } from './Components/Books/BooksDescription'
import { UseStateDemo3 } from './Components/UseStateDemo3'
import { Products } from './Components/Products'
import { InputDemo1 } from './Components/input/InputDemo1'


function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomeComponent />}></Route>
        <Route path='/netflixhome' element={<NetflixHome />}></Route>
        <Route path='/netflixshows' element={<NetflixShows />}></Route>
        <Route path='/netflixmovies' element={<NetflixMovies />}></Route>
        {/* <Route path='/watch' element = {<PlayContent/>}></Route> */}
        <Route path='/watch/:id' element={<PlayContent />}></Route>
        <Route path='/*' element={<Error404 />}></Route>
        <Route path='/useStateDemo' element={<UseStateDemo />}></Route>
        <Route path='/useStateDemo2' element={<UseStateDemo2 />}></Route>
        <Route path='/useStateDemo3' element={<UseStateDemo3 />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/bookstask1' element={<BooksTask1 />}></Route>
        <Route path='/Book/:id' element={<BooksDescription />}></Route>
        <Route path='/inputdemo1' element={<InputDemo1/>}></Route>
      </Routes>

    </div>
  )
}


export default App