import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav className='nav'>
        <a href="#" className="nav-link">Home</a>
        <a href="#About" className="nav-link">About</a>
        <a href="#Experience" className="nav-link">Experience</a>
        <a href="#Contact" className="nav-link">Contact</a>
    </nav>
  )
}

export default Nav