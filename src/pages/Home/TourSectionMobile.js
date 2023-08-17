import React from 'react';
import moneyicon from './moneyicon.png'
import Frame from './Frame.png'
import Framewx from './framewithx.png'
import Frame2 from './Frame2.png'
import "./ContentBox.css";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LeftVactorSvg from '../../assets/leftVactorSvg';

const DummyArray = [
    { 
        title: 'Tour Dates Announced', 
        text: 'Brace yourselves, music lovers! some·stage is plugging in to shake up your concert experience. We are calling all fans to join the journey, take our survey, and help us fine-tune this rocking revolution. Your input will help us set the stage.' 
    },
    { 
        title: 'Backstage Access', 
        text: 'Fancy a sneak peek at the future of concerts? By banding together with us early, you ll get the inside scoop on prototypes and score exclusive perks. This isnt just about attending a concert—it is about crafting the show together.' 
    },
    { 
        title: 'Sound Check', 
        text: 'By fall 2023, we re dropping a prototype that is going to be music to your ears. Our community members will get the all-access pass to artist performances and a behind-the-scenes look at the creation process. Artists, your stage is waiting!' 
    },
    { 
        title: 'Green Room Hangs', 
        text: 'Join early and reap the rewards. Think exclusive events, inviting perks, and first dibs on pre-sale tickets for our virtual concert. Together, lets tune up an immersive concert environment that hits all the right notes.' 
    },
    { 
        title: 'Setlist Selection', 
        text: 'We are dialing in the talent you love! As we sign on big-name artists, you ll be front-row for the announcements. Because at Some·Stage, you are not just part of the crowd, control of the concert is in your hands!' 
    },
]

export default function TourSectionMobile() {
    return (
        <>
            {DummyArray.map((data, index) => <> <div key={index} className={` ${index === 0 ? '' : 'tourWithInfo'} tourWithData`}>
                <div className='lineWithDashes'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="150" viewBox="0 0 4 150" fill="none">
                        <path d="M0 148C0 149.105 0.89543 150 2 150C3.10457 150 4 149.105 4 148H0ZM0 7.4C0 8.50457 0.89543 9.4 2 9.4C3.10457 9.4 4 8.50457 4 7.4H0ZM4 22.2C4 21.0954 3.10457 20.2 2 20.2C0.89543 20.2 0 21.0954 0 22.2H4ZM0 37C0 38.1046 0.89543 39 2 39C3.10457 39 4 38.1046 4 37H0ZM4 51.8C4 50.6954 3.10457 49.8 2 49.8C0.89543 49.8 0 50.6954 0 51.8H4ZM0 66.6C0 67.7046 0.89543 68.6 2 68.6C3.10457 68.6 4 67.7046 4 66.6H0ZM4 81.4C4 80.2954 3.10457 79.4 2 79.4C0.89543 79.4 0 80.2954 0 81.4H4ZM0 96.2C0 97.3046 0.89543 98.2 2 98.2C3.10457 98.2 4 97.3046 4 96.2H0ZM4 111C4 109.895 3.10457 109 2 109C0.89543 109 0 109.895 0 111H4ZM0 125.8C0 126.905 0.89543 127.8 2 127.8C3.10457 127.8 4 126.905 4 125.8H0ZM4 140.6C4 139.495 3.10457 138.6 2 138.6C0.89543 138.6 0 139.495 0 140.6H4ZM0 0V7.4H4V0H0ZM0 22.2V37H4V22.2H0ZM0 51.8V66.6H4V51.8H0ZM0 81.4V96.2H4V81.4H0ZM0 111V125.8H4V111H0ZM0 140.6V148H4V140.6H0Z" fill="url(#paint0_linear_32_5456)" />
                        <defs>
                            <linearGradient id="paint0_linear_32_5456" x1="2" y1="149.574" x2="2.00002" y2="0" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="0.480056" stop-color="white" stop-opacity="0.24" />
                                <stop offset="1" stop-color="white" stop-opacity="0.08" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="circleTourMain">
                    <div className="tourMainDiv">
                        <div className={`${index === 4 ? 'selection' : ''} ${index === 3 ? 'greenRoomTitle' : ''} tourDatesAnnounced`}>
                            <h1 className="firststageplan">{data.title}</h1>

                            {/* Text to display when the button is clicked */}
                            <div className="firstpartMain">
                                <p className="firstpartText">
                                    {data.text}
                                </p>
                                <div className="firstPartsvg">
                                    <LeftVactorSvg />
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
                <div className="circlesvg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                        <g filter="url(#filter0_d_32_5450)">
                            <g clip-path="url(#clip0_32_5450)">
                                <g filter="url(#filter1_d_32_5450)">
                                    <circle cx="36" cy="28" r="12" fill="url(#paint0_linear_32_5450)" />
                                    <circle cx="36" cy="28" r="10" stroke="white" stroke-width="4" />
                                </g>
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_d_32_5450" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="8" />
                                <feGaussianBlur stdDeviation="12" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.249475 0 0 0 0 0.0916667 0 0 0 0 0.4 0 0 0 1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_5450" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_32_5450" result="shape" />
                            </filter>
                            <filter id="filter1_d_32_5450" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="8" />
                                <feGaussianBlur stdDeviation="12" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.249475 0 0 0 0 0.0916667 0 0 0 0 0.4 0 0 0 1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_5450" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_32_5450" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear_32_5450" x1="36.5748" y1="21.6351" x2="47.6975" y2="21.6402" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#A968E7" />
                                <stop offset="1" stop-color="#FD479A" />
                            </linearGradient>
                            <clipPath id="clip0_32_5450">
                                <rect x="24" y="16" width="24" height="24" rx="12" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

            </>
            )}

            <div className='mobileBottomImages'>
                <img src={Frame} alt="Frame" className=""  />
                <img src={Framewx} alt="Framewx" className="" />
                <img src={Frame2} alt="Frame2" className="" />
            </div>

        </>
    )
}


