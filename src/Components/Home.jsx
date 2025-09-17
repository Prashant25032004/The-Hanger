import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Products from './Products'
import Footer from './Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/products" element={<Products/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default Home