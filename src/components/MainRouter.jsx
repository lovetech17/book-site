import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'

import CartPage from './CartPage'
import Login from './Login'


const MainRouter = () => {
  return (
    <Container>
      <Routes>

        
        <Route path='/cart' element={<CartPage />} />
        <Route path='/login' element={<Login />} />


      </Routes>
    </Container>
  )
}

export default MainRouter
