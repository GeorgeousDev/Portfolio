import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 10rem;
	color: white;
	@media (max-width: 1300px) {
		display: flex;
		flex-direction: column;
		padding: 2rem 2rem;
		text-align: center;
    overflow-x: hidden;
	}
`;
export const Description = styled.div`
	flex: 1;
	padding-right: 5rem;
	z-index: 2;
	h2 {
		font-weight: lighter;
	}
	@media (max-width: 1300px) {
		text-align: center;
		flex: auto;
		align-items: center;
		padding-right: 0rem;
    overflow-x: hidden;
		button {
			margin: 2rem 0rem 5rem 0rem;
		}
	}
`;
export const Image = styled.div`
	z-index: 2;
	flex: 1;
	overflow: hidden;
	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
		border-radius: 1rem;
	}
  @media (max-width: 1300px) {
    flex: auto;
		}
	}
`;

export const Hide = styled.div`
	overflow: hidden;
`;
