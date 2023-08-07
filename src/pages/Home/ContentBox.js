import React, { useState } from 'react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GradeTwoToneIcon from '@mui/icons-material/GradeTwoTone';
import { Paper, Box } from '@mui/material';
import Carousel from "react-elastic-carousel";
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/system';
import homeim from './somestagehome.png';
import img2 from './img2.png'; 
import layer_1 from './Layer_1.png'; 
import layer_2 from './Layer_2.png'; 
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import seper from './seperator.png'
import sec3im1 from './section3im1.png'
import roadmap from './roadmap.png'
import moneyicon from './moneyicon.png'
import Frame from './Frame.png'
import c1 from './carouselim1.png'
import c2 from './carouselim2.png'
import Frame1 from './Frame1.png'
import moneyicon2 from './moneyicon2.png'
import Frame2 from './Frame2.png'
import Vector8 from './Vector8.png'
import Vector9 from './Vector9.png'
import Button from '@mui/material/Button';
import "./ContentBox.css"; 

const Container = styled(Paper)(({ theme }) => ({
    backgroundColor: 'black',
    borderRadius:  '30px',
    paddingTop: '10px',
    margin: '25px'

}));
 /*
const Rectangle5 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
    <path opacity="0.16" d="M1.11287 22.4109C0.0992716 21.7979 -0.225521 20.4793 0.387427 19.4657L11.4858 1.11288C12.0988 0.0992796 13.4174 -0.225514 14.431 0.387435L32.7838 11.4858C33.7974 12.0988 34.1222 13.4174 33.5093 14.431L22.4109 32.7838C21.7979 33.7974 20.4793 34.1222 19.4657 33.5093L1.11287 22.4109Z" fill="white"/>
  </svg>
);

const Star3 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="74" height="119" viewBox="0 0 74 119" fill="none">
  <path d="M37.6435 1.56802C39.4346 -0.242118 42.5137 1.11922 42.3802 3.6622L41.2503 25.186C40.4214 40.9741 46.3752 56.3644 57.6133 67.4843L72.9344 82.6441C74.7445 84.4352 73.3832 87.5143 70.8402 87.3808L49.3163 86.2508C33.5283 85.4219 18.138 91.3757 7.01808 102.614L-8.1417 117.935C-9.93278 119.745 -13.0119 118.384 -12.8784 115.841L-11.7484 94.3169C-10.9196 78.5289 -16.8733 63.1385 -28.1115 52.0186L-43.4325 36.8588C-45.2427 35.0678 -43.8813 31.9886 -41.3383 32.1221L-19.8145 33.2521C-4.02648 34.081 11.3639 28.1272 22.4838 16.8891L37.6435 1.56802Z" fill="#FFC14A"/>
</svg>
); 
*/





const ContentBox = () => {
  
  const [showMessage, setShowMessage] = useState(false);

  const handleIconButtonClick = () => {
    setShowMessage(true);
  };
  
    
  const [showMessage1, setShowMessage1] = useState(false);

  const handleIconButtonClick2 = () => {
    setShowMessage1(true);
  };
  const [showMessage2, setShowMessage2] = useState(false);

  const handleIconButtonClick3 = () => {
    setShowMessage2(true);
  };
  const [showMessage3, setShowMessage3] = useState(false);

  const handleIconButtonClick4 = () => {
    setShowMessage3(true);
  };
  
  
  
  
  
  
  
  
  return (
    <Container elevation={3}>

      <h1 className="title">Artists & Audiences </h1>
      <h1 className= "title1">Above All</h1>
      <img src={homeim} alt="main image" className="homeimg" style={{
        margin: 'auto',
      }} />
      
      <div className="section2">
      
      <div className="buttonholder"> 
      <h1 className="buttonlabel">ABOUT US</h1>
      </div>

      <h1 className= "title3">Get more from</h1><h1 className
      ="title3">your streams</h1>
              <p className="some-stage-helps">
              Some · Stage helps creators to avoid the social platform fees
      
              and get their stream revenues straight into their own hands.
      
              Communicate with your fans, get more from the tickets that
           
              they are own, and get the progressive income stream.
            </p>
      <img src={img2} alt="image2" className="img2" style={{
      }} />
      <img src={seper} alt="seper" className="seperator" style={{
      }} />
      </div>






      <div className="section3"> 
      
      <h1 className="section3im1">Here are our plans for the future</h1>
    
 

      <img src={roadmap} alt="roadmap" className="roadmap" style={{
      }} />
      <h1 className="firststageplan">First Stage Plan</h1>
      <IconButton variant="contained" onClick={handleIconButtonClick} className="addbutton">
        <AddOutlinedIcon />
      </IconButton>

      {/* Text to display when the button is clicked */}
      {showMessage && (
        <p className="firstpart">Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Nec sagittis aliquam malesuada bibendum arcu. Semper risus in hendrerit gravida rutrum quisque non. Pellentesque eu tincidunt tortor aliquam nulla facilisi.</p>
      )}
      <img src={moneyicon} alt="moneyicon" className="moneyicon" style={{
      }} />
        <img src={Vector8} alt="rightvector" className="rightvector" style={{
      }} />
      
      <div className="container2">
      <img src={Frame} alt="Frame" className="Frame" style={{
      }} />
      <h1 className="stageplan2">Nisl nunc mi ipsum faucibus</h1>
      </div>



        <div className="stage2con">
      <IconButton variant="contained" onClick={handleIconButtonClick2} className="addbutton2">
        <AddOutlinedIcon />
      </IconButton>
      {/* Text to display when the button is clicked */}
      {showMessage1 && (
        <p className="secondpart">Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Nec sagittis aliquam malesuada bibendum arcu. Semper risus in hendrerit gravida rutrum quisque non. Pellentesque eu tincidunt tortor aliquam nulla facilisi.</p>
      )}
      </div>
      
      <img src={Vector9} alt="leftvector" className="leftvector" style={{
      }} />
    <div className="container3"> 
    <img src={Frame1} alt="Frame1" className="Frame1" style={{
      }} />
      <h1 className="stageplan3">Montes nascetur ridiculus</h1>
    </div>
    <div className="stage3con">
      <IconButton variant="contained" onClick={handleIconButtonClick3} className="addbutton3">
        <AddOutlinedIcon />
      </IconButton>
      {/* Text to display when the button is clicked */}
      {showMessage2 && (
        <p className="thirdpart">Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Et tortor at risus viverra adipiscing. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Blandit cursus risus at ultrices mi tempus imperdiet.</p>
      )}
      </div>
      
      <img src={Vector8} alt="rightvector" className="rightvector" style={{
      }} />
      <div className="container4">
      <img src={moneyicon2} alt="moneyicon2" className="moneyicon2" style={{
      }} />
      <h1 className="stageplan4">Odio tempor orci dapibus</h1>
      </div>

      <div className="stage4con">
      <IconButton variant="contained" onClick={handleIconButtonClick4} className="addbutton4">
        <AddOutlinedIcon />
      </IconButton>
      {/* Text to display when the button is clicked */}
      {showMessage3 && (
        <p className="fourthpart">Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Nec sagittis aliquam malesuada bibendum arcu. Semper risus in hendrerit gravida rutrum quisque non. Pellentesque eu tincidunt tortor aliquam nulla facilisi.</p>
      )}
      </div>
      <img src={Vector9} alt="leftvector" className="leftvector" style={{
      }} />

    <div className="container3"> 
    <img src={Frame2} alt="Frame2" className="Frame2" style={{
      }} />
      <h1 className="stageplan3">Montes nascetur ridiculus</h1>
    </div>
    <div className="stage3con">
      <IconButton variant="contained" onClick={handleIconButtonClick3} className="addbutton3">
        <AddOutlinedIcon />
      </IconButton>
      {/* Text to display when the button is clicked */}
      {showMessage2 && (
        <p className="thirdpart">Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Et tortor at risus viverra adipiscing. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Blandit cursus risus at ultrices mi tempus imperdiet.</p>
      )}
      </div>
    </div>

    
    <img src={seper} alt="seper" className="seperator1" style={{
      }} />

    <div className="Section3">
      <h1 className="readmore">Read More About 
      <br />Our Journey</h1>


      <div className="carousel-container">
      <Carousel itemsToShow={2} pagination={false}>
        <div className="carousel-item">
          <img src={c1} alt="c1" className="carousel-image" />
          <h2 className="carousel-date">JUN 19, 2023</h2>
          <h1 className="carousel-text">New affiliate program!</h1>
          <h2 className="carousel-caption">Some · Stage helps creators to avoid the social platform fees and get their stream revenues...</h2>
        </div>
        <div className="carousel-item">
          <img src={c2} alt="c2" className="carousel-image" />
          <h2 className="carousel-date">JUN 19, 2023</h2>
          <h1 className="carousel-text">New affiliate program!</h1>
          <h2 className="carousel-caption">Some · Stage helps creators to avoid the social platform fees and get their stream revenues...</h2>
        </div>
        <div className="carousel-item">
          <img src={c2} alt="c2" className="carousel-image" />
          <h2 className="carousel-date">JUN 19, 2023</h2>
          <h1 className="carousel-text">New affiliate program!</h1>
          <h2 className="carousel-caption">Some · Stage helps creators to avoid the social platform fees and get their stream revenues...</h2>
        </div>
        {/* Add more carousel items if needed */}
      </Carousel>
    </div>
    
    <div className="lastsection">
    <h1 className="mission">Join The Mission</h1>
    <h2 className="mission-sub">We would love to get your feedback through a 2 min Typeform, and collect some thoughts about how we can improve our product.</h2>
    <button className="join-button">Join our Discord</button>
    
    </div>
    
      <div className="page-end">
      <div className="layer-container2">
      <img src={layer_2} alt="layer_2" className="layer2" />

      </div>
      <img src={layer_1} alt="layer_1" className="layer1" />
   
      </div>












    </div>
    </Container>

  );
};

export default ContentBox;

