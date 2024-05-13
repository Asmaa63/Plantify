import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className='login-home-page'>
      <div className="container-login">
        <input type="checkbox" name="" id="flip" />
        <div className="cover-form">
          <div className="front">
            <img src={require("./login.jpg")} alt="Login" />
            {/* <div className="text">
              <span className="text-1">Every new friends </span>
              <span className="text-2">hi </span>
            </div> */}
          </div>
          {/* <div className="back">
            <img className='backimg' src={require("./login2.jpg")} alt="Login" />
            <div className="text">
              <span className="text-1">Every new friends </span>
              <span className="text-2">hi </span>
            </div>
          </div> */}
        </div>
        <form action="">
            <div className="form-content">
              <div className="login-form">
                <div className="title">Login</div>
                <div className="input-boxes">
                    <div className="input-box">
                      <span className="material-symbols-outlined">mail</span>
                      <input type="email" name="" id="" placeholder='Enter Your Email' required />
                    </div>
                    <div className="input-box">
                      <span className="material-symbols-outlined">lock</span>
                      <input type="text" name="" id="" placeholder='Enter Your Password' required />
                    </div>
                    <div className="input-text"><a href="#">Forget Password?</a></div>
                    <div className="input-box-button">
                    <button className='input-button'>Login </button>
                    </div>
                    <div className="input-text-2 sign-up-text">Don't have an account? <label htmlFor="flip">Sigup now </label></div>
                </div>
            </div>

            <div className="signUp-form">
                <div className="title">SignUp</div>
                <div className="input-boxes">
                <div className="input-box">
                    <span className="material-symbols-outlined">person</span>
                    <input type="text" name="" id="" placeholder='Enter Your Name' required />
                    </div>
                    <div className="input-box">
                      <span className="material-symbols-outlined">mail</span>
                      <input type="email" name="" id="" placeholder='Enter Your Email' required />
                    </div>
                    <div className="input-box">
                      <span className="material-symbols-outlined">call</span>
                      <input type="text" name="" id="" placeholder='Enter Your phone' required />
                    </div>
                    <div className="input-box">
                      <span className="material-symbols-outlined">lock</span>
                      <input type="text" name="" id="" placeholder='Enter Your Password' required />
                    </div>
                    <div className="input-box-button">
                      <button className='input-button'>Sign Up </button>
                    </div>
                    <div className="input-text-2 sign-up-text">Already have an account?  <label htmlFor="flip">Login now </label></div>
                </div>
            </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
