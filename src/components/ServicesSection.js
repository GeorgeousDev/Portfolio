import React from "react";
//Import Icons
import javascript from "../img/javascript.svg";
import react from "../img/react.svg";
import html from "../img/html5.svg";
import css from "../img/css.svg";
import bootstrap from "../img/bootstrap.svg";
import node from "../img/node.svg";
import programming from "../img/programming3.jpg";
//Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
	const [element, controls] = useScroll();
	return (
		<Services
			variants={scrollReveal}
			animate={controls}
			initial="hidden"
			ref={element}
		>
			<Description>
				<h2>
					<span>Technologies</span> <br />
					that I use:
				</h2>
				<Cards>
					<Card>
						<div className="icon">
							<img alt="icon" src={javascript} />
							<h3>JavScript</h3>
						</div>
						<p>Lastest ES6 solutions.</p>
					</Card>
					<Card>
						<div className="icon">
							<img alt="icon" src={react} />
							<h3>React</h3>
						</div>
						<p>
							Styled Component Router
							<br /> Redux.
						</p>
					</Card>
					<Card>
						<div className="icon">
							<img alt="icon" src={html} />
							<h3>HTML5</h3>
						</div>
						<p>Well-organized and clear HTML code allows for faster work.</p>
					</Card>
					<Card>
						<div className="icon">
							<img alt="icon" src={css} />
							<h3>CSS</h3>
						</div>
						<p>
							You don't judge a book by its cover, but a book with a beautiful
							cover will attract many more eyes.
						</p>
					</Card>
					<Card>
						<div className="icon">
							<img alt="icon" src={bootstrap} />
							<h3>Bootstrap</h3>
						</div>
						<p>
						The world’s most popular front-end open source toolkit.
						</p>
					</Card>
					<Card>
						<div className="icon">
							<img alt="icon" src={node} />
							<h3>Node JS</h3>
						</div>
						<p>
						Open source server environment.
						</p>
					</Card>
				</Cards>
			</Description>
			<Image>
				<img alt="desk and laptop" src={programming} />
			</Image>
		</Services>
	);
};

const Services = styled(About)`
	h2 {
		padding-bottom: 5rem;
	}
	p {
		width: 70%;
		padding: 2rem 0rem 4rem 0rem;
	}
`;
const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 1300px) {
		justify-content: center;
	}
`;
const Card = styled.div`
	flex-basis: 20rem;
	.icon {
		display: flex;
		align-items: center;

		h3 {
			margin-left: 1rem;
			background: #1b1b1b;
			color: white;
			padding: 1rem;
		}
		img {
			height: 4.5rem;
			width: 4.5rem;
		}
	}
`;

export default ServicesSection;
