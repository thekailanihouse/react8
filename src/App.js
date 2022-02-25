import React from 'react'
import { BrowserRouter, BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import { auth } from './service/firebase'
import routes from './libs/Routes'
import PersonContainer from './components/PersonContainer'


const App = () => {
 return(
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/person' element={<PersonContainer/>}/>
    </Routes>
   </BrowserRouter>
 )
}

export default App;
