import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import "./assets/CSS/formtask1.css"
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
import { InputDemo1 } from './Components/input/InputDemo1'
import { InputDemo2 } from './Components/input/InputDemo2'
import { Product2 } from './Components/Product2'
import { SelectDropDown } from './Components/SelectDropDown'
import { DependDropDown } from './Components/input/DependDropDown'
import { Formdemo1 } from './Components/form/Formdemo1'
import { Formdemo2 } from './Components/form/Formdemo2'
import { Formdemo5 } from './Components/form/Formdemo5'
import { Formdemo6 } from './Components/form/Formdemo6'
import { Formdemo7 } from './Components/form/Formdemo7'
import { FormTask1 } from './Components/form/FormTask1'
import { Task1 } from './Components/internship/task/Task1'
import { Play } from './Components/internship/task/Play'


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
        <Route path='/bookstask1' element={<BooksTask1 />}></Route>
        <Route path='/Book/:id' element={<BooksDescription />}></Route>
        <Route path='/inputdemo1' element={<InputDemo1/>}></Route>
        <Route path='/inputdemo2' element={<InputDemo2/>}></Route>
        <Route path='/product2' element={<Product2/>}></Route>
        {/* <Route path='/selectdropdown' element={<SelectDropDown/>}></Route> */}
        <Route path='/dropdown' element={<DependDropDown/>}></Route>
        <Route path='/formdemo1' element={<Formdemo1/>}></Route>
        <Route path='/formdemo2' element={<Formdemo2/>}></Route>
        <Route path='/formdemo5' element = {<Formdemo5/>}></Route>
        <Route path='/formdemo6' element = {<Formdemo6/>}></Route>
        <Route path='/formdemo7' element = {<Formdemo7/>}></Route>
        <Route path='/formtask1' element = {<FormTask1/>}></Route>
        <Route path='/iplteam' element = {<Task1/>}></Route>
        <Route path='/ipl/:id' element = {<Play/>}></Route>
      </Routes>

    </div>
  )
}


export default App