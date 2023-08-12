import React from 'react';
// import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from './navlogo.png'
import { Router, Link, Route } from 'wouter';

const Navbar = () => {
    return (
        <nav>
            <u1 className="nav-left">
                <li style={{ listStyle: 'none' }}><Link to="/" style={{ textDecoration: 'none', color: 'white' }} >Home</Link></li>
                { /* <li><Link to="/about" style={{ textDecoration: 'none', color: 'white' }} >About</Link></li>
                */ }
                <li>About</li>
                <li>Roadmap</li>
                <li>Blog</li>
            </u1>

        
        <div className="nav-middle">
        <img src={logo} alt="logo" className="logo" style={{
        margin: 'auto',
      }} />
        </div>
        <div className="nav-right">
        <a href='https://discord.com/invite/QCjqu3KppW'>
            <button>Head 
                <br />Backstage!</button> </a>
                </div>
        </nav>
    );
};

export default Navbar; 

