import React from 'react';
import {  Link } from "react-router-dom";
import logo from '../assets/images/my-finance-logo.png';
import ThemeSwitcher from './ThemeSwitcher'
import './Navbar.css';


function Navbar(){

    return (
        <div className = 'navbar'>
          <div className = 'logo'>
          <img className = 'image' src = {logo} alt = 'my finance logo'/>
          </div>
          <div className = 'container'>
            <Link to="/about">About</Link>
            <Link to="/community">Community</Link>
            <Link to="/support">Support</Link>
          
          <button className ='sign-up'>
            <Link to="/">Sign Up</Link>
          </button>
          
          <ThemeSwitcher />
          </div>
      </div>
      )
}

export default Navbar