import React from 'react';
import './FloatingNav.css';
import {AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlinePhone} from 'react-icons/ai';
import { useState } from 'react';

const FloatingNav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav className='floating-nav'>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#About" onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#Experience" onClick={() => setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active' : ''}><AiOutlineBook /></a>
      <a href="#Contact" onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><AiOutlinePhone /></a>
    </nav>
  )
}

export default FloatingNav