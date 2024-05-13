import React, { useState } from 'react';
import './Login.css';

const Login = ({setShowLogin}) => {
    const [currState, setCurrState ]=useState("Sign In")
  return (
    <div className="login-home">
    <div className='LoginPage'>
        <form action="" className="login-page-container">
            <div className="login-page-title">
                <h2>{currState}</h2>
                <span onClick={()=>setShowLogin(false)} className="material-symbols-outlined">close</span>
            </div>
            <div className="login-page-input">
                {currState==="Login" ?<></> : 
                <>
                <input type="text" placeholder='Enter Your name' required/>
                <input type="text" placeholder='Enter Your Phone' required />
                </>
                }
                <input type="email" placeholder='Enter Your Email' required/>
                <input type="password" placeholder='Enter Your Password ' required />
            </div>
            <button>{currState === "Sign In" ?"Create Account" : "Login"}</button>
            <div className="login-page-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>
            <div className="login-text">
            {currState === "Login" 
            ? <p>Create a new account? <span  onClick={()=>setCurrState("Sign In")}>Click here </span></p>
            : <p>Already have an account? <span  onClick={()=>setCurrState("Login")}>Login here</span></p>
            }
            </div>
        </form>
    </div>
    </div>
  )
}

export default Login
