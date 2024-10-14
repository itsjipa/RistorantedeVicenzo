import React, { useState } from 'react';
import './Login.css';
import cross from '../../assets/cross.png';

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className='login'>
      <form className='login-container'>
        <div className='login-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={cross} alt="Close login form"/>
        </div>
        <div className='login-inputs'>
          {currState === "Login" ? <></> : <input type='text' placeholder='Your Name' required />}
          <input type='email' placeholder='Your Email' required />
          <input type='password' placeholder='Password' required />
        </div>
        <button>{currState === "Sign Up" ? "Create new account" : "Login"}</button>
        <div className='login-condition'>
          <input type='checkbox'/>
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState === 'Login' ? 
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p> : 
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  );
};

export default Login;