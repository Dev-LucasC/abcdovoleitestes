import React from 'react'
import './header.css'
import Logo from './logo.png'

const Header = () => {
  return (
    <header>
        <div className="header-logo">
            <img src={Logo} alt="" />
        </div>
        <div className="header-nav">
            <ul>
                <li>
                    <a href="">Inicio |</a>
                </li>
                <li>
                    <a href="">Noticias |</a>
                </li>
                <li>
                    <a href="">Prestação de contas |</a>
                </li>
                <li>
                    <a href="">Equipes |</a>
                </li>
                <li>
                    <a href="">Calendário |</a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header