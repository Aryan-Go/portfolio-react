import React from 'react'
import "../Navbar.css"
export default function Navbar() {
  return (
    <>
      <nav>
        <div className="hamburger-lay">
          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          <label htmlFor="menu-toggle" className="hamburger">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </label>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#lists">Projects</a></li>
            <li><a href="#chalo2">Contact</a></li>
          </ul>
        </div>
        <img className="flash" src="https://flash-app-gasper.sdslabs.org/images/flash.png" alt=""/>
      </nav>
    </>
  )
}
