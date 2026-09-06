import React from 'react';
import { Link } from "react-router-dom";
import "../signup.css"
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";

const Login = () => {
  return (
    <>
        <div className="signBox">
            <div className="leftLogos">

            </div>
            <div className="formBox">
              <h2>Happening Now</h2>
              <div className="form">
                <h4>Sign in to Twitter!</h4>
                <div className="user">
                  <label htmlFor="userId">Phone or Username or Email</label>
                  <input type="text" name="userId" id="userId" placeholder=''/>
                </div>
                <div className="password">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" placeholder=''/>
                </div>
                <button className="loginBtn">Log in</button>
                <button className="forgotBtn">Forgot Password?</button>
                <div className="or">
                  <hr />
                  <span>or</span>
                </div>
                <div className="extras">
                  <button className="signGoogle"><FcGoogle className='google'/> Sign in with Google</button>
                  <button className="signApple"><IoLogoApple className='apple'/> Sign in with Apple</button>
                </div>
                <p className="createAccount">
                  Don't have an account?
                  <Link to="/register" className='registerLink'>Register now</Link>
                </p>
              </div>
            </div>
        </div>
    </>
  )
}

export default Login
