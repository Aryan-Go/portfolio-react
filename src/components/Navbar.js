import React from 'react'
import "../Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
        <ul>
            <a href='#title'><li>Home</li></a>
            <a href='#lists'><li>List of websites</li></a>
            <a href='#chalo2'><li>Contact</li></a>
        </ul>
    </div>
  )
}
