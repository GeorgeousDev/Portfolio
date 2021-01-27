import React from "react";
import profil from "../img/profil.jpg";
import { Link } from 'react-router-dom';
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
	return (
		<About>
			<Description>
				<motion.div>
					<Hide>
						<motion.h2 variants={titleAnim}>Hello there!</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>My name is</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>Jerzy Pędlowski</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>and I am</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>
							<span>Front End Developer</span>
						</motion.h2>
					</Hide>
				</motion.div>
				<motion.p variants={fade}>
					I started to be interested in programming about 1.5 years ago. From
					then on, I devote every free moment to perfecting my programming
					skills.
				</motion.p>
				<Link to='/contact'>
					<motion.button variants={fade}>Contact</motion.button>
					</Link>
			</Description>
			<Image>
				<motion.img variants={photoAnim} src={profil} alt="guy with a camera" />
			</Image>
			<Wave />
		</About>
	);
};

//Styled Components

export default AboutSection;
