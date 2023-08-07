import React from 'react';
import Navbar from "./Navbar"; 
import ContentBox from './ContentBox';
import Footer from './Footer.js'


const Home = () => {
    return (
        <div className= "home-container">

            <Navbar />
      
             <ContentBox />
             <Footer />
            <div className = "main-content">
              
           
            </div>
            
        </div>
    );
};

export default Home; 