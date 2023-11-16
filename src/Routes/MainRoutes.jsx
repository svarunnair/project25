import React from 'react'
import Signup from '../Authentication/Signup'
import { Route, Routes } from 'react-router-dom'
import Signin from '../Authentication/Signin'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Payment from '../Pages/Payment'

function MainRoutes() {
  return (
    <div>

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/payment' element={<Payment/>}/>


      </Routes>
        
    </div>
  )
}

export default MainRoutes