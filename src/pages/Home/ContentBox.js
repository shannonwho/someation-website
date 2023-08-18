import React from 'react';
import { Paper } from '@mui/material';
import { styled } from '@mui/system';
import img2 from './img2.png';
import artists from './artistsaudiences.png';
import layer_1 from './Layer_1.png';
import layer_2 from './Layer_2.png';
import seper from './seperator.png'
import moneyicon from './moneyicon.png'
import c1 from './carouselim1.png'
import c2 from './carouselim2.png'
import c4 from './carouselim4.png'
import videoFile from './ss-official.mp4';
import BlackRoadMap from './black-roadmap.png';
import "./ContentBox.css";
import { FaCircle, FaStar, FaMusic } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TourSectionDesktop from './TourSectionDesktop';
import TourSectionMobile from './TourSectionMobile';

const Container = styled(Paper)(() => ({
	backgroundColor: 'black',
	borderRadius: '30px',
	paddingTop: '10px',
	margin: '10px'
}));

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

const sliderItems = [
	{
		redirectUrl: 'https://someation.medium.com/getting-the-gang-together-1f74ace10b3a',
		imageLink: c1,
		heading: 'Getting the Gang Together',
		description: 'Dive into the inspiring journey of the visionary behind Some·Stage, and discover how he plans to transform the music industry forever...'
	},
	{
		redirectUrl: 'https://someation.medium.com/the-state-of-the-industry-6068e3d226b7',
		imageLink: c2,
		heading: 'The State of the Industry',
		description: 'Unpack the current state of the music industry with us, as we shine a spotlight on the challenges artists and audiences face today...'
	},
	{
		redirectUrl: 'https://someation.medium.com/behind-the-scenes-73a75e3a2717',
		imageLink: c4,
		heading: 'Behind the Scenes',
		description: 'Step backstage for an in-depth tour of the Some·Stage experience. Learn what our platform has in store for audiences and the exciting new experiences that await you.'
	},

]

const SliderItem = ({ item }) => {
	const { redirectUrl, imageLink, heading, description } = item;
	return (
		<div className="carousel-item">
			<a
				href={redirectUrl}
				class="no-underline"
			>
				<img src={imageLink} alt="c1" className="carousel-image" />
			</a>
			<a
				href={redirectUrl}
				class="no-underline"
			>
				<h1 className="carousel-text">{heading}</h1>
			</a>
			<h2 className="carousel-caption">
				{description}
			</h2>
		</div>
	);
}

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
			breakpoint: 100000,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 992,
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

const ContentBox = () => {
	return (
		<Container elevation={3} className="marginforContainer">
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
					<div className='btnhalfContainerImage'>
						<img src={img2} alt="image2" className="img2" style={{ width: '100%' }} />
					</div>
				</div>
				<div className="speatorMaindiv">
					<img src={seper} alt="seper" className="seperator" style={{}} />
				</div>
			</div>
			<div id="roadmap" className="section3">
				<div className="sec3Maindiv">
					<div>
						<img src={BlackRoadMap} alt="roadmap" className="roadmap" style={{}} />
					</div>
					<div className='tour-with-us-container'>
						<h1 className="section3im1">TOUR WITH US</h1>
						<img
							src={moneyicon}
							alt="moneyicon"
							className="moneyicon"
						/>
					</div>
				</div>
				<div className='tourSectionDesktop'>
					<TourSectionDesktop />
				</div>
				<div className='tourSectionMobile'>
					<TourSectionMobile />
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

				<div style={{ paddingLeft: '40px', paddingRight: '60px', marginTop: '-40%' }}>
					<Slider {...settings}>
						{[...sliderItems, ...sliderItems].map((item, index) => (
							<div key={index} className="carousel-item carousel-item2" style={{ marginRight: '30px', marginLeft: '30px' }}>
								<SliderItem item={item} />
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
				{/* <div className="icon-container">
					<FaCircle className="FaCircle3" />
					<FaMusic className="music5" />
					<FaMusic className="music4" />
					<FaStar className="star4" />
					<FaCircle className="FaCircle1" />
				</div> */}

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
