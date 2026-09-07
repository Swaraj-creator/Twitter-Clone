import React from 'react'
import { Link } from "react-router-dom";
import "../signup.css"
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";

const Register = () => {
  return (
    <>
        <div className="signBox">
            <div className="leftLogos">
              <span className="logo-svg">
                <FaTwitter/>
              </span>
              <h2>Happening Now</h2>
            </div>
            <div className="formBox">
              <div className="form">
                <h4>Create an Account</h4>
                <div className="user">
                  <label htmlFor="userName">Your Full Name</label>
                  <input type="text" name="userName" id="userName" placeholder=''/>
                </div>
                <div className="user">
                  <label htmlFor="userId">Create an Username</label>
                  <input type="text" name="userId" id="userId" placeholder=''/>
                </div>
                <div className="user">
                  <label htmlFor="userEmail">Email (optional)</label>
                  <input type="text" name="userEmail" id="userEmail" placeholder=''/>
                </div>
                <div className="user">
                  <label htmlFor="userPhone">Phone (optional)</label>
                  <input type="text" name="userPhone" id="userPhone" placeholder=''/>
                </div>
                <div className="password">
                  <label htmlFor="password">Create Password</label>
                  <input type="password" name="password" id="password" placeholder=''/>
                </div>
                <button className="loginBtn">Create Account</button>
                <div className="or">
                  <hr />
                  <span>or</span>
                </div>
                <div className="extras">
                  <button className="signGoogle"><FcGoogle className='google'/> Sign in with Google</button>
                  <button className="signApple"><IoLogoApple className='apple'/> Sign in with Apple</button>
                </div>
                <p className="createAccount">
                  Already have an account?
                  <Link to="/login" className='registerLink'>Login</Link>
                </p>
              </div>
            </div>
        </div>
    </>
  )
}

export default Register
