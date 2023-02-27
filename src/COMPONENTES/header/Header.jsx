import React from 'react'
import './header.css'
import Logo from './logo.png'

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".header-nav",
    ".header-nav li",
  );
  mobileNavbar.init();

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
        <script src="Header.jsx"></script>
    </header>
  )
}

export default Header