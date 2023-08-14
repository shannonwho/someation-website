import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from './navbarLogoNew.png';
import { Router, Route } from 'wouter';

function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

const Navbar = () => {
    return (
        <nav>
            <u1 className="nav-left">
                <li style={{ listStyle: 'none' }}><Link to="/" style={{ textDecoration: 'none', color: 'white' }} >Home</Link></li>
                <li><a href="#about" onClick={(e) => {e.preventDefault(); scrollToElement("about")}} style={{ textDecoration: 'none', color: 'white' }}>About</a></li>
                <li><a href="#roadmap" onClick={(e) => {e.preventDefault(); scrollToElement("roadmap")}} style={{ textDecoration: 'none', color: 'white' }}>Roadmap</a></li>
                <li><a href="#blog" onClick={(e) => {e.preventDefault(); scrollToElement("blog")}} style={{ textDecoration: 'none', color: 'white' }}>Blog</a></li>
            </u1>
            
            <div className="nav-middle">
                <img src={logo} alt="logo" className="logo" style={{
                    margin: 'auto',
                }} />
            </div>
            <div className="nav-right">
                <a href='https://discord.com/invite/QCjqu3KppW'>
                    <button>Head 
                        <br />Backstage!</button> 
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
