import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login-form.scss';

const LoginForm = () => {
  let navigate = useNavigate();
  return (
    <div className='login-form'>
      <h1>Welcome</h1>
      <p>Enter details to login</p>

      <form>
        <input type='email' name='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Password' />
        <a href='#!'>Forgot Passoword?</a>
        <button onClick={() => navigate('dashboard')}>Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
