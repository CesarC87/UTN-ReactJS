import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

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
            <li><Link to="/">Inicio</Link> </li>
            <li><Link to="/">Generos</Link> </li>
            <li><Link to="/">Películas</Link> </li>
            <li><Link to="/">Destacadas</Link> </li>            
          </ul>
        </nav>
    </header>
  )
}

export default Header