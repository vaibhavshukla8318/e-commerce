

import React, { useState } from 'react';
import style from "../css/navbar.module.css";
import { Link } from 'react-router-dom';
import Form from './Form';
import MenuIcon from '../image/menu.png';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true);

  const handleMenuClick = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className={style.navbar}>
      <Link to="/" className={style.pageLink}>
        <p>Electro HomeoPathy</p>
      </Link>
      <div className={style.rightContainer}>
       
        {showLinks && (
          <div className={style.displayNone}>
            <Link to='/' className={style.link}>Home</Link>
            <Link to='/about' className={style.link}>About</Link>
            <Link to='/services' className={style.link}>Services</Link>
            <Link to='/blog' className={style.link}>Blog</Link>
            <Link to='/contact' className={style.link}>Contact</Link>
            <div className={style.paraContainer}>
             <p>Make an Appointment</p>
            </div>
          </div>
        )}
        <img src={MenuIcon} alt='menuIcon' onClick={handleMenuClick} />
      </div>
    </div>
  );
};

export default Navbar;





