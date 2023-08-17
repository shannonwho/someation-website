import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo1 from './logo1.png'
import ig1 from './ig1.png';
import yt1 from './yt1.png';
import tw1 from './tw1.png'; 

function scrollToElement(id) {
  	const element = document.getElementById(id);
  	if (element) {
      	element.scrollIntoView({ behavior: 'smooth' });
  	}
}

const Footer = () => {
    return (
      	<div className="containerf">
          	<u1 className="footer-menu">
          		<li style={{ listStyle: 'none' }}><Link to="/" style={{ textDecoration: 'none', color: 'white' }} >Home</Link></li>
          		<li><a href="#about" onClick={(e) => {e.preventDefault(); scrollToElement("about")}} style={{ textDecoration: 'none', color: 'white' }}>About</a></li>
          		<li><a href="#roadmap" onClick={(e) => {e.preventDefault(); scrollToElement("roadmap")}} style={{ textDecoration: 'none', color: 'white' }}>Roadmap</a></li>
          		<li><a href="#blog" onClick={(e) => {e.preventDefault(); scrollToElement("blog")}} style={{ textDecoration: 'none', color: 'white' }}>Blog</a></li>
          	</u1>
        	<div className="footer-middle">
        		<img src={logo1} alt="logo1" className="logo1"/>
        	</div>
      		<div className="footer-last">
				<a href='https://youtube.com/@somestage'>
					<img src={yt1} alt="yt1" className="yt1" /> 
				</a>
				<a href='https://instagram.com/some.stage'>
					<img src={ig1} alt="ig1" className="ig1" /> 
				</a>
				<a href='https://twitter.com/somestage'>
					<img src={tw1} alt="tw1" className="tw1" /> 
				</a>
      		</div>
      	</div>
    );
};
  
export default Footer;
  