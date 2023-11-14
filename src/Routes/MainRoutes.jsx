import React from 'react'
import Signup from '../Authentication/Signup'
import { Route, Routes } from 'react-router-dom'
import Signin from '../Authentication/Signin'
import Home from '../Pages/Home'

function MainRoutes() {
  return (
    <div>MainRoutes

      <Routes>

        <Route path='/' element={<Signup/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/home' element={<Home/>}/>


      </Routes>
        
    </div>
  )
}

export default MainRoutes