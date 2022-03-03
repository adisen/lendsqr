import React from 'react';
import './top-nav.scss';
import { FaSearch, FaRegBell } from 'react-icons/fa';

import logo from '../../assets/logo.png';
import profilePic from '../../assets/image4.png';

const TopNav = () => {
  return (
    <section className='top-nav'>
      <div className='top-nav__container'>
        <div>
          <p className='top-nav__logo--text'>
            <img src={logo} alt='logo' className='logo' /> lendsqr
          </p>
        </div>
        <div className='top-nav__search'>
          <input type='text' placeholder='Search for anything' />
          <p>
            <FaSearch />
          </p>
        </div>
        <div className='top-nav__info'>
          <a href='#!'>Docs</a>
          <FaRegBell />
          <p>
            <img src={profilePic} alt='profile pic' />
            Adedeji
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopNav;
