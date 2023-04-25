import React, { useState,useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { MdLogin } from 'react-icons/md';
import { TiStarburst } from 'react-icons/ti';
import { BsFacebook } from 'react-icons/bs';
import Logo from '../../headers/icon/logo-white-1.svg';
import Header from '../../headers/Header';

function Login(isShown) {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await axios.post('http://localhost:5000/user/login', { ...user });
      
      localStorage.setItem('firstLogin', true);
      
      window.location.href = '/';
      // localStorage.removeItem()
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const style = {
    marginRight: '10px',
    color:{
      color: 'rgba(255,255,255)'
    }
  }
  // const pathname = isShown;
  // console.log(pathname)

  const signUpButton = useRef(null);
  const signInButton = useRef(null);
  const container = useRef(null);

  const handleSignUpClick = () => {
    container.current.classList.add("right-panel-active");
  };

  const handleSignInClick = () => {
    container.current.classList.remove("right-panel-active");
  };
  return (
    <>
    {/* <Header isShown={false}/>
    <div className="login-page">
      <form onSubmit={loginSubmit}>
      <h2>Login</h2>
        <br />
        <br />
        <p className="text-email">
          E-mail
          <TiStarburst color="red" fontSize="7pt"/>
        </p>
        <input
          type="email"
          name="email"
          required
          value={user.email}
          onChange={onChangeInput}
        />
        <p className="text-email">
          Password
          <TiStarburst color="red" fontSize="7pt"/>
        </p>
        <input
          type="password"
          name="password"
          required
          autoComplete="on"
          value={user.password}
          onChange={onChangeInput}
        />

        <div className="row">
          <button type="submit">
            Login
          </button>
          <Link to="/register">Register</Link>
        </div>
        <hr/>
        <img style={style} src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="ig" width="30" height="30" />
        <img style={style} src="https://cdn-icons-png.flaticon.com/512/3670/3670032.png" alt="ig" width="30" height="30" />
        <img  style={style} src="https://cdn-icons-png.flaticon.com/512/888/888853.png" alt="ig" width="30" height="30" />
        <img style={style} src="https://cdn-icons-png.flaticon.com/512/2504/2504839.png" alt="ig" width="30" height="30" />
      </form>
    </div> */}
    <div className="login-container" id="login-container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container" ref={container}>
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={handleSignInClick} ref={signInButton}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" onClick={handleSignUpClick} ref={signUpButton}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
//login
export default Login;
