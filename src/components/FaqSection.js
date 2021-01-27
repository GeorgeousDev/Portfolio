import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
	const [element, controls] = useScroll();
	return (
		<Faq
			variants={scrollReveal}
			ref={element}
			animate={controls}
			initial="hidden"
		>
			<h2>
				More <span>Information</span>
			</h2>
			<AnimateSharedLayout>
				<Toggle title="Who am I?">
					<div className="answer">
						<p>
							I am a 30-year-old man,who hopes programming will provide him with
							options for development, stability and enjoyment in his work.
						</p>
					</div>
				</Toggle>
				<Toggle title="Skills?">
					<div className="answer">
						<p>
							Apart from those mentioned above, I speak 3 languages ​​(Polish,
							English, German). I have recently started learning Norwegian,
							because it is this country,that I bind my future with. I also
							constantly develop my programming skills, adapting new
							technologies.
						</p>
					</div>
				</Toggle>
				<Toggle title="My Strengths?">
					<div className="answer">
						<p>
							Stubbornness in pursuit of goals, <br />
							Fast learner,
							<br /> Team player, <br /> Dedicated.
						</p>
					</div>
				</Toggle>
				<Toggle title="Experience">
					<div className="answer">
						<p>
							You can see most of my work in the{" "}
							<Link to="/work" style={{ textDecoration: "none", color: "#23d997",fontWeight:"bold", fontSize:"1.4rem" }}>
								"My projects"
							</Link>{" "}
							tab. I am currently working with team, on an encrypted
							communicator for an investor from Poland. I have commercial
							experience, although it is not very big.
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
		</Faq>
	);
};

const Faq = styled(About)`
	display: block;
	span {
		display: block;
	}
	h2 {
		padding-bottom: 2rem;
		font-weight: lighter;
	}
	.faq-line {
		background: #cccccc;
		height: 0.2rem;
		margin: 2rem 0rem;
		width: 100%;
	}
	.question {
		padding: 3rem 0rem;
		cursor: pointer;
	}
	.answer {
		padding: 2rem 0rem;
		p {
			padding: 1rem 0rem;
		}
	}
`;

export default FaqSection;
