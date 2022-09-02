import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CardDetail from '../components/CardDetail/CardDetail'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import Generos from '../components/Generos/Generos'

const Router = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />}/>         
            <Route path="/title/:id" element={<CardDetail />}/>
            <Route path="/generos/" element={<Generos />}/>
        </Routes>
        <Footer/>  
    </BrowserRouter>
  )
}

export default Router