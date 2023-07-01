import React from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import Services from './pages/Services'
import Cart from './pages/Cart'
import Layout from './components/Layout'
import PaymentModal from './pages/PaymentModal'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='services' element={<Services/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='payment' element={<PaymentModal/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
