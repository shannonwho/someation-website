import React, { useState } from 'react';
import { Paper, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/system';
import homeim from './somestagehome.png';
import img2 from './img2.png';
import artists from './artistsaudiences.png';
import layer_1 from './Layer_1.png';
import layer_2 from './Layer_2.png';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import seper from './seperator.png'
import sec3im1 from './section3im1.png'
import roadmap from './roadmap.png'
import moneyicon from './moneyicon.png'
import Frame from './Frame.png'
import Framewx from './framewithx.png'
import Carousal from "@itseasy21/react-elastic-carousel";
import c1 from './carouselim1.png'
import c2 from './carouselim2.png'
import c4 from './carouselim4.png'

import Frame1 from './Frame1.png'
import framex from './framex.png'
import moneyicon2 from './moneyicon2.png'
import Frame2 from './Frame2.png'
import Vector8 from './Vector8.png'
import Vector9 from './Vector9.png'
import videoFile from './ss-official.mp4'
import Button from '@mui/material/Button';
import "./ContentBox.css";
import { FaCircle, FaStar, FaMusic } from 'react-icons/fa';

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Circle from '../../assets/circle';
import LineWithDashes from '../../assets/lineWithDashes';
import LeftVactorSvg from '../../assets/leftVactorSvg';
import RightVactorSvg from '../../assets/rightVactorSvg'

export default function TourSectionDesktop() {
  return (
    <>
      <div className="tourWithData">
        <div className='lineWithDashes'>
          <LineWithDashes />
        </div>
        <div className="circleTourMain">
          <div className="circlesvg">
            <Circle />
          </div>
          <div className="tourMainDiv">
            <div className="tourDatesAnnounced ">
              <h1 className="firststageplan">Tour Dates Announced</h1>

              {/* Text to display when the button is clicked */}
              <div className="firstpartMain">
                <p className="firstpartText">
                  Brace yourselves, music lovers! some·stage is plugging in to
                  shake up your concert experience. We're calling all fans to
                  join the journey, take our survey, and help us fine-tune
                  this rocking revolution. Your input will help us set the
                  stage.
                </p>

              </div>
            </div>
            <div>
              <img
                src={moneyicon}
                alt="moneyicon"
                className="moneyicon"
                style={{}}
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src={Vector8}
        alt="rightvector"
        className="rightvector"
        style={{}}
      />

      <div className="container2">
        <img src={Frame} alt="Frame" className="Frame" style={{}} />
        <div className="tourDatesAnnounced">
          <div className="stage2con">
            <div className='text'>
              <h1 className="stageplan2">Backstage Access</h1>
              <p className="secondpart firstpartText">
                Fancy a sneak peek at the future of concerts? By banding
                together with us early, you'll get the inside scoop on
                prototypes and score exclusive perks. This isn't just about
                attending a concert—it's about crafting the show together.
              </p>
            </div>
            <div className="secondPartMain">
              <div className="circleContainer2svg">
                <Circle />
              </div>


            </div>

          </div>
        </div>
      </div>
      <img src={Vector9} alt="leftvector" className="leftvector" style={{}} />
      <div className="circlesvg">
        <Circle />
      </div>
      <div className='stage3-Section'>
        <div className="stage3con">
          {/* Text to display when the button is clicked */}

          <p className="thirdpart firstpartText">
            <h1 className="firststageplan">Sound Check</h1>
            By fall 2023, we're dropping a prototype that's going to be music to
            your ears. Our community members will get the all-access pass to
            artist performances and a behind-the-scenes look at the creation
            process. Artists, your stage is waiting!
          </p>
        </div>

        <div className="container3">
          <img src={Framewx} alt="Framewx" className="Frame1" style={{}} />

        </div>
      </div>
      <img
        src={Vector8}
        alt="rightvector"
        className="rightvector"
        style={{}}
      />
      <div className='stage4-Section'>
        <div className="container4">
          <img
            src={moneyicon2}
            alt="moneyicon2"
            className="moneyicon2"
            style={{}}
          />
        </div>
        <div className="stage4con">
          {/* Text to display when the button is clicked */}
          <p className="fourthpart firstpartText">
            <h1 className="firststageplan">Green Room Hangs</h1>
            Join early and reap the rewards. Think exclusive events, inviting
            perks, and first dibs on pre-sale tickets for our virtual concert.
            Together, let's tune up an immersive concert environment that hits
            all the right notes.
          </p>
        </div>
        <div className="circlesvg">
          <Circle />
        </div>
      </div>
      <img src={Vector9} alt="leftvector" className="leftvector" style={{}} />
      <div className="circlesvg">
        <Circle />
      </div>
      <div className='stage5-container'>
        <div className="stage5con">
          {/* Text to display when the button is clicked */}
          <p className="fifthpart firstpartText">
            <h1 className="firststageplan">Setlist Selection</h1>
            We're dialing in the talent you love! As we sign on big-name
            artists, you'll be front-row for the announcements. Because at
            Some·Stage, you're not just part of the crowd, control of the
            concert is in your hands!
          </p>
        </div>
        <div className="container3">
          <img src={Frame2} alt="Frame2" className="Frame2" style={{}} />

        </div>
      </div>
    </>
  )
}
