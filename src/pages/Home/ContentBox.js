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

const Container = styled(Paper)(({ theme }) => ({
  backgroundColor: 'black',
  borderRadius: '30px',
  paddingTop: '10px',
  margin: '10px'

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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}



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
  const [showMessage4, setShowMessage4] = useState(false);

  const handleIconButtonClick5 = () => {
    setShowMessage4(true);
  };



  //Blog section 

  const items = [
    // Replace with your individual carousel items
    <div className="carousel-item">
      <a
        href="https://someation.medium.com/getting-the-gang-together-1f74ace10b3a"
        class="no-underline"
      >
        <img src={c1} alt="c1" className="carousel-image" />
      </a>
      {/* <h2 className="carousel-date">JUN 19, 2023</h2> */}
      <a
        href="https://someation.medium.com/getting-the-gang-together-1f74ace10b3a"
        class="no-underline"
      >
        <h1 className="carousel-text">Getting the Gang Together</h1>
      </a>
      <h2 className="carousel-caption">
        Dive into the inspiring journey of the visionary behind Some·Stage, and
        discover how he plans to transform the music industry forever...
      </h2>
    </div>,
    <div className="carousel-item">
      <a
        href="https://someation.medium.com/the-state-of-the-industry-6068e3d226b7"
        class="no-underline"
      >
        <img src={c2} alt="c2" className="carousel-image" />
      </a>
      {/* <h2 className="carousel-date">JUN 19, 2023</h2> */}
      <a
        href="https://someation.medium.com/the-state-of-the-industry-6068e3d226b7"
        class="no-underline"
      >
        <h1 className="carousel-text">The State of the Industry</h1>
      </a>
      <h2 className="carousel-caption">
        Unpack the current state of the music industry with us, as we shine a
        spotlight on the challenges artists and audiences face today...
      </h2>
    </div>,
    <div className="carousel-item">
      <a
        href="https://someation.medium.com/behind-the-scenes-73a75e3a2717"
        class="no-underline"
      >
        <img src={c4} alt="c4" className="carousel-image" />
      </a>
      {/* <h2 className="carousel-date">JUN 19, 2023</h2> */}
      <a
        href="https://someation.medium.com/behind-the-scenes-73a75e3a2717"
        class="no-underline"
      >
        <h1 className="carousel-text">Behind the Scenes</h1>
      </a>
      <h2 className="carousel-caption">
        Step backstage for an in-depth tour of the Some·Stage experience. Learn
        what our platform has in store for audiences and the exciting new
        experiences that await you.
      </h2>
    </div>,
    // Repeat your items here for circular effect
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // const breakPoints = [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 550, itemsToShow: 2 },
  //   { width: 768, itemsToShow: 3 },
  // ];

  // const duplicatedItems = [...items, ...items, ...items];

  // Mission section

  return (
    <Container elevation={3} className="marginforContainer">
      {/*
      <h1 className="title">Artists & Audiences </h1>
      <h1 className= "title1">Above All</h1>
       <img src={homeim} alt="main image" className="homeimg" style={{
        margin: 'auto',
      }} /> */}
      <img
        src={artists}
        alt="artists"
        className="artists"
        style={{
          margin: "auto",
        }}
      />
      <video
        autoPlay
        loop
        muted="true"
        playsInline
        preload="auto"
        className="homeimg"
      >
        <source src={videoFile} type="video/mp4" />
      </video>
      <div id="about" className="section2">
        <div className="sec2MainContainer">
          <div className="btnhalfContainer">
            <div className="buttonholder">
              <h1 className="buttonlabel">Our Mission</h1>
            </div>

            <h1 className="title3">GET AMPED</h1>
            <p className="some-stage-helps">
              At Some·Stage, we're tuning the frequency of live music to a whole
              new key!
            </p>
            <p className="some-stage-helps">
              It’s simple, we unite artists and audiences in a shared spotlight
              within an immersive world. Fans have the power to customize their
              concert experiences while artists are amplified to connect with
              their global fanbase like never before. Step into Some•Stage and
              feel the rhythm of a concert experience reimagined, where every
              beat hits closer to home.
            </p>
          </div>
          <div>
            <img src={img2} alt="image2" className="img2" style={{}} />
          </div>
        </div>
        <div className="speatorMaindiv">
          <img src={seper} alt="seper" className="seperator" style={{}} />
        </div>
      </div>
      <div id="roadmap" className="section3">
        <div className="sec3Maindiv">
          <div>
            <img src={roadmap} alt="roadmap" className="roadmap" style={{}} />
          </div>
          <h1 className="section3im1">TOUR WITH US</h1>
        </div>
        <div className="tourWithData">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="135"
              viewBox="0 0 6 135"
              fill="none"
            >
              <path
                d="M0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3V21C6 22.6569 4.65685 24 3 24C1.34315 24 0 22.6569 0 21V3Z"
                fill="url(#paint0_linear_18_1706)"
              />
              <path
                d="M0 40C0 38.3431 1.34315 37 3 37C4.65685 37 6 38.3431 6 40V58C6 59.6569 4.65685 61 3 61C1.34315 61 0 59.6569 0 58V40Z"
                fill="url(#paint1_linear_18_1706)"
              />
              <path
                d="M0 77C0 75.3431 1.34315 74 3 74C4.65685 74 6 75.3431 6 77V95C6 96.6569 4.65685 98 3 98C1.34315 98 0 96.6569 0 95V77Z"
                fill="url(#paint2_linear_18_1706)"
              />
              <path
                d="M0 114C0 112.343 1.34315 111 3 111C4.65685 111 6 112.343 6 114V132C6 133.657 4.65685 135 3 135C1.34315 135 0 133.657 0 132V114Z"
                fill="url(#paint3_linear_18_1706)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_18_1706"
                  x1="3"
                  y1="0"
                  x2="3"
                  y2="135"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="1" stop-color="white" stop-opacity="0.8" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_18_1706"
                  x1="3"
                  y1="0"
                  x2="3"
                  y2="135"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="1" stop-color="white" stop-opacity="0.8" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_18_1706"
                  x1="3"
                  y1="0"
                  x2="3"
                  y2="135"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="1" stop-color="white" stop-opacity="0.8" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_18_1706"
                  x1="3"
                  y1="0"
                  x2="3"
                  y2="135"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="1" stop-color="white" stop-opacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="circleTourMain">
            <div className="circlesvg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="88"
                height="88"
                viewBox="0 0 88 88"
                fill="none"
              >
                <g filter="url(#filter0_d_18_815)">
                  <g clip-path="url(#clip0_18_815)">
                    <g filter="url(#filter1_d_18_815)">
                      <circle
                        cx="44"
                        cy="36"
                        r="20"
                        fill="url(#paint0_linear_18_815)"
                      />
                      <circle
                        cx="44"
                        cy="36"
                        r="17"
                        stroke="white"
                        stroke-width="6"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_18_815"
                    x="0"
                    y="0"
                    width="88"
                    height="88"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="12" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.249475 0 0 0 0 0.0916667 0 0 0 0 0.4 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_18_815"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_18_815"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_18_815"
                    x="0"
                    y="0"
                    width="88"
                    height="88"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="12" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.249475 0 0 0 0 0.0916667 0 0 0 0 0.4 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_18_815"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_18_815"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_18_815"
                    x1="44.958"
                    y1="25.3919"
                    x2="63.4959"
                    y2="25.4003"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A968E7" />
                    <stop offset="1" stop-color="#FD479A" />
                  </linearGradient>
                  <clipPath id="clip0_18_815">
                    <rect
                      x="24"
                      y="16"
                      width="40"
                      height="40"
                      rx="20"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="tourMainDiv">
              <div className="tourDatesAnnounced">
                <h1 className="firststageplan">Tour Dates Announced</h1>

                {/* Text to display when the button is clicked */}
                <div className="firstpartMain">
                  <p className="firstpart">
                    Brace yourselves, music lovers! some·stage is plugging in to
                    shake up your concert experience. We're calling all fans to
                    join the journey, take our survey, and help us fine-tune
                    this rocking revolution. Your input will help us set the
                    stage.
                  </p>
                  <div className="firstPartsvg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="auto"
                      height="273"
                      viewBox="0 0 1390 273"
                      fill="none"
                    >
                      <path
                        d="M3 0V148C3 170.091 20.9086 188 43 188H1347C1369.09 188 1387 205.909 1387 228V273"
                        stroke="url(#paint0_linear_18_849)"
                        stroke-width="6"
                        stroke-dasharray="20 20"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_18_849"
                          x1="1391"
                          y1="250"
                          x2="-24.5"
                          y2="-40.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop
                            offset="0.480056"
                            stop-color="white"
                            stop-opacity="0.24"
                          />
                          <stop
                            offset="1"
                            stop-color="white"
                            stop-opacity="0.08"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
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

        <div className="container2">
          <img src={Frame} alt="Frame" className="Frame" style={{}} />
          <div className="tourDatesAnnounced textRight">
            <div className="stage2con">
              <div>
                <h1 className="stageplan2">Backstage Access</h1>
                <p className="secondpart">
                  Fancy a sneak peek at the future of concerts? By banding
                  together with us early, you'll get the inside scoop on
                  prototypes and score exclusive perks. This isn't just about
                  attending a concert—it's about crafting the show together.
                </p>
              </div>
              <div className="secondPartMain">
                <div className="circleContainer2svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="88"
                    height="88"
                    viewBox="0 0 88 88"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_18_815)">
                      <g clip-path="url(#clip0_18_815)">
                        <g filter="url(#filter1_d_18_815)">
                          <circle
                            cx="44"
                            cy="36"
                            r="20"
                            fill="url(#paint0_linear_18_815)"
                          />
                          <circle
                            cx="44"
                            cy="36"
                            r="17"
                            stroke="white"
                            stroke-width="6"
                          />
                        </g>
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_18_815"
                        x="0"
                        y="0"
                        width="88"
                        height="88"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="8" />
                        <feGaussianBlur stdDeviation="12" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.249475 0 0 0 0 0.0916667 0 0 0 0 0.4 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_18_815"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_18_815"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_d_18_815"
                        x="0"
                        y="0"
                        width="88"
                        height="88"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="8" />
                        <feGaussianBlur stdDeviation="12" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.249475 0 0 0 0 0.0916667 0 0 0 0 0.4 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_18_815"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_18_815"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_18_815"
                        x1="44.958"
                        y1="25.3919"
                        x2="63.4959"
                        y2="25.4003"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A968E7" />
                        <stop offset="1" stop-color="#FD479A" />
                      </linearGradient>
                      <clipPath id="clip0_18_815">
                        <rect
                          x="24"
                          y="16"
                          width="40"
                          height="40"
                          rx="20"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="secondPartSvg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1390"
                    height="273"
                    viewBox="0 0 1390 273"
                    fill="none"
                  >
                    <path
                      d="M1387 0V148C1387 170.091 1369.09 188 1347 188H43C20.9086 188 3 205.909 3 228V273"
                      stroke="url(#paint0_linear_18_1244)"
                      stroke-width="6"
                      stroke-dasharray="20 20"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_18_1244"
                        x1="-0.999748"
                        y1="250"
                        x2="1414.5"
                        y2="-40.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop
                          offset="0.480056"
                          stop-color="white"
                          stop-opacity="0.24"
                        />
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0.08"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container3">
          <img src={Framewx} alt="Framewx" className="Frame1" style={{}} />
          <h1 className="stageplan3">Sound Check</h1>
        </div>
        <div className="stage3con">
          {/* Text to display when the button is clicked */}

          <p className="thirdpart">
            By fall 2023, we're dropping a prototype that's going to be music to
            your ears. Our community members will get the all-access pass to
            artist performances and a behind-the-scenes look at the creation
            process. Artists, your stage is waiting!
          </p>
        </div>

        <img
          src={Vector8}
          alt="rightvector"
          className="rightvector"
          style={{}}
        />
        <div className="container4">
          <img
            src={moneyicon2}
            alt="moneyicon2"
            className="moneyicon2"
            style={{}}
          />

          <h1 className="stageplan4">Green Room Hangs</h1>
        </div>

        <div className="stage4con">
          {/* Text to display when the button is clicked */}
          <p className="fourthpart">
            Join early and reap the rewards. Think exclusive events, inviting
            perks, and first dibs on pre-sale tickets for our virtual concert.
            Together, let's tune up an immersive concert environment that hits
            all the right notes.
          </p>
        </div>
        <img src={Vector9} alt="leftvector" className="leftvector" style={{}} />

        <div className="container3">
          <img src={Frame2} alt="Frame2" className="Frame2" style={{}} />
          <h1 className="stageplan5">Setlist Selection</h1>
        </div>
        <div className="stage5con">
          {/* Text to display when the button is clicked */}
          <p className="fifthpart">
            We're dialing in the talent you love! As we sign on big-name
            artists, you'll be front-row for the announcements. Because at
            Some·Stage, you're not just part of the crowd, control of the
            concert is in your hands!
          </p>
        </div>
      </div>
      <img src={seper} alt="seper" className="seperator1" style={{}} />
      {/* // Blog section */}
      <div id="blog" className="Section3">
        <h1 className="readmore">
          CRATE DIGGER CATALOG
          <br />
          (the deep cuts)
          <div className="icon-con">
            <FaMusic className="music3" />
            <FaStar className="star2" />
            <FaCircle className="circle3" />

            <FaMusic className="music" />
            <FaCircle className="FaCircle" />
            <FaMusic className="music2" />

            <FaStar className="star" />
          </div>
        </h1>

        {/* <div className="carousel-container">
          <Carousal
            breakPoints={breakPoints}
            isRTL={false}
            autoPlaySpeed={3000}
            pagination={false}
          >
            {duplicatedItems.map((item, index) => (
              <div key={index} className="carousel-item">
                {item}
              </div>
            ))}
          </Carousal>
        </div> */}

        <div style={{ paddingLeft: '40px', paddingRight: '60px', marginTop: '-360px' }}>
          <Slider {...settings}>
            {[...items, ...items].map((item, index) => (
              <div key={index} className="carousel-item carousel-item2" style={{ marginRight: '30px', marginLeft: '30px' }}>
                {item}
              </div>
            ))}

          </Slider>
        </div>

        <div className="icon-container">
          <FaStar className="s1" />
          <FaCircle className="c1" />
          <FaMusic className="m1" />
          <FaCircle className="c2" />
          <FaStar className="s2" />
          <FaMusic className="m2" />
        </div>

        <div className="lastsection">
          <h1 className="mission">JOIN THE BAND</h1>
          <h2 className="mission-sub">
            Ready to rock? <br />
            Head back stage and join us to get in tune with fellow members, jam
            with the artists, and score VIP access to products, early events,
            and more!
            <br /> <br />
            GANG!
          </h2>

          <a href="https://discord.com/invite/QCjqu3KppW">
            <button className="join-button">
              Head <br />
              Backstage
            </button>
          </a>
        </div>
        <div className="icon-container">
          <FaCircle className="FaCircle3" />
          <FaMusic className="music5" />
          <FaMusic className="music4" />
          <FaStar className="star4" />
          <FaCircle className="FaCircle1" />
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
