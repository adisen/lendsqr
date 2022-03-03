import React from 'react';
import LoginForm from '../../components/login-form';
import './login.scss';

import pablo from '../../assets/pablo-sign-in.svg';
import logo from '../../assets/logo.png';

const login = () => {
  return (
    <div className='login__container'>
      <div className='login__header'>
        <p>
          <img src={logo} alt='logo' className='logo' /> lendsqr
        </p>
      </div>
      <div className='login__body'>
        <img src={pablo} alt='pablo sign in' />
        <LoginForm />
      </div>
    </div>
  );
};

export default login;
