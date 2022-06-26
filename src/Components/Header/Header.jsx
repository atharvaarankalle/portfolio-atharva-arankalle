import React from 'react';
import './Header.css';
import Button from '../Button/Button';
import HeaderSocials from './HeaderSocials'; 

const Header = () => {
  return (
    <header>
      <div className="profile-picture">
        <img src="https://avatars3.githubusercontent.com/u/31009081?s=460&v=4" alt="Atharva Arankalle" />
      </div>
      <div className="container header__container">
        <h1>Atharva Arankalle</h1>
        <h5 className="text-light">Fullstack Software Engineering Student</h5>
        <HeaderSocials />
        <Button />
      </div>
    </header>
  )
}

export default Header