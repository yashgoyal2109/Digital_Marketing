import { useState } from 'react'
import Hero from './components/Hero'
import Stream from './components/Stream'
import Footer from './components/Footer'
import Path from './components/Path'
import Signup from './pages/Signup'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/main'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import ProductDetails from './pages/components/ProductDetails'
import Products from './pages/Products'
import Home from './pages/components/Home'
import Discounts from './pages/Discounts'
import BuyorSell from './components/BuyorSell'
import UserHome from './user/UserHome'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/productdetails' element={<ProductDetails />} />
          <Route path='/discounts' element={<Discounts />} />
          <Route path='/buyorsell' element={<BuyorSell />} />
          <Route path='/userhome' element={<UserHome />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App