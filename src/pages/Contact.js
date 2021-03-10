import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
//Icons
import gmail from "../img/gmail.svg";
import linkedin from "../img/linkedin.svg";
import github from "../img/github.svg";

const Contact = () => {
	return (
		<ContactStyle
			exit="exit"
			variants={pageAnimation}
			initial="hidden"
			animate="show"
		>
			<Title>
				<Hide>
					<motion.h2 variants={titleAnim}>Get in touch:</motion.h2>
				</Hide>
			</Title>
			<div>
				<Hide>
					<Social variants={titleAnim}>
						<motion.img src={gmail} />
						<h2>jerzy.pedlowski@gmail.com</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnim}>
						<motion.img src={linkedin} />
						<a
							href="http://www.linkedin.com/in/georgeousdev"
							target="_blank"
							rel="noopener noreferrer"
						>
							<h2>Linkedin</h2>
						</a>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnim}>
						<motion.img src={github} />
						<a
							href="https://github.com/GeorgeousDev"
							target="_blank"
							rel="noopener noreferrer"
						>
							<h2>Github</h2>
						</a>
					</Social>
				</Hide>
			</div>
		</ContactStyle>
	);
};

const ContactStyle = styled(motion.div)`
	padding: 5rem 10rem;
	color: white;
	min-height: 90vh;

	@media (max-width: 1500px) {
		padding: 2rem;
		font-size: 1rem;
		align-items: center;
		min-height: 100%;
	}
`;
const Title = styled.div`
	margin-bottom: 4rem;
	color: white;
	@media (max-width: 1500px) {
		margin-top: 5rem;
	}
`;
const Hide = styled.div`
	overflow: hidden;
`;
const Social = styled(motion.div)`
	display: flex;
	align-items: center;
	a {
		text-decoration: none;
	}
	h2 {
		margin: 2rem;

		color: white;
	}
	img {
		height: 4rem;
		width: 4rem;
	}
	@media (max-width: 1500px) {
		h2 {
			font-size: 2rem;
		}
	}
	@media (max-width: 760px) {
		h2 {
			font-size: 1.5rem;
		}
	}
`;

export default Contact;
