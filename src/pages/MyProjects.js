import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import music from "../img/musicApp1.png";
import game from "../img/gameApp1.png";
//Animations
import { motion } from "framer-motion";
import {
	sliderContainer,
	slider,
	pageAnimation,
	fade,
	photoAnim,
	lineAnim,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const MyProjects = () => {
	const [element, controls] = useScroll();
	return (
		<Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
			<motion.div variants={sliderContainer}>
				<Frame1 variants={slider}></Frame1>
				<Frame2 variants={slider}></Frame2>
				<Frame3 variants={slider}></Frame3>
				<Frame4 variants={slider}></Frame4>
			</motion.div>
			<Movie>
				<Link
					to={process.env.PUBLIC_URL + "/#/work/music-app"}
					style={{ textDecoration: "none", color: "white" }}
				>
					<motion.h2 variants={fade}>Music App</motion.h2>
					<motion.div variants={lineAnim} className="line"></motion.div>

					<Hide>
						<motion.img variants={photoAnim} src={music} alt="music app" />
					</Hide>
				</Link>
			</Movie>

			<Movie ref={element} variants={fade} animate={controls} initial="hidden">
				<Link
					to={process.env.PUBLIC_URL + "/#/work/game-app"}
					style={{ textDecoration: "none", color: "white" }}
				>
					<h2>Game App</h2>
					<motion.div variants={lineAnim} className="line"></motion.div>

					<img src={game} alt="game app" />
				</Link>
			</Movie>

			<ScrollTop />
		</Work>
	);
};

const Work = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;
	@media (max-width: 1300px) {
		padding: 2rem 2rem;
	}

	h2 {
		padding: 1rem 0rem;
	}
`;
const Movie = styled(motion.div)`
	padding-bottom: 10rem;
	color: white;

	.line {
		height: 0.5rem;
		background: #23d997;
		margin-bottom: 3rem;
	}
	img {
		width: 100%;
		height: 90vh;
		object-fit: cover;
	}
	h2 {
		text-decoration: none;
	}
`;
const Hide = styled.div`
	overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
	position: fixed;
	left: 0;
	top: 10%;
	width: 100%;
	height: 100vh;
	background: #fffebf;
	z-index: 2;
`;
const Frame2 = styled(Frame1)`
	background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
	background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
	background: #8effa0;
`;

export default MyProjects;
