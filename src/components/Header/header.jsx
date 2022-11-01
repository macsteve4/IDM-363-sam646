import React from 'react'
import './header.css';

function Header() {

console.log('hello')

  return (
    <header className="header">
    <a href="index.html" class="logo">
        <img src="https://mcinerneymedia.com/idm250/wp-content/uploads/2022/11/buldaklogo.png" alt="Buldak Logo" class="logo"></img>
    </a>
    <input className="menu-btn" type="checkbox" id="menu-btn"></input>
    <label className="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    <ul className="menu">
      <li><a href="index.js">CART</a></li>
      <li><a href="art.html">ABOUT</a>
      </li>
      <li><a href="about.html">ADMIN</a></li>
    </ul>
  </header>
  )
}

export default Header