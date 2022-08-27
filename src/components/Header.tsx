import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'

const Header = () => {
  // Logo
  // Menu
  return (
    <header className='header'>       
        <div className="logo">
          <img src="" alt="LogoHeader" />
        </div>
        <nav> 
          <ul>
            {/* <li><Link to="/" element={<Home/>}/></li> */}
            {/* <li><Link to="/" element={<Home/>}/></li>
            <li><Link to="/" element={<Home/>}/></li>
            <li><Link to="/" element={<Home/>}/></li> */}
          </ul>
        </nav>
    </header>
  )
}

export default Header