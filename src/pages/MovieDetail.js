import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
//icon
import arrow from '../img/arrowRight.svg';

const MovieDetail = () => {
	const history = useHistory();
	const url = history.location.pathname;
	const [movies, setMovies] = useState(MovieState);
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
		setMovie(currentMovie[0]);
		console.log(setMovies);
	}, [movies, url]);

	return (
		<>
			{movie && (
				<Details
					exit="exit"
					variants={pageAnimation}
					initial="hidden"
					animate="show"
				>
					<HeadLine>
						<a
							href={movie.urlToWebsite}
							target="_blank"
							rel="noopener noreferrer"
						>
							<h2>Click <img src={arrow} alt='arrow' />{ "  "}{movie.title}</h2>
						</a>
						<img src={movie.mainImg} alt="movie" />
					</HeadLine>
					<Comments>
						{movie.comments.map((comment) => (
							<Coment
								title={comment.title}
								description={comment.description}
								key={comment.title}
							/>
						))}
					</Comments>
					<ImageDisplay>
						<img src={movie.secondaryImg} alt="movie" />
					</ImageDisplay>
				</Details>
			)}
		</>
	);
};

const Details = styled(motion.div)`
	color: white;
`;
const HeadLine = styled.div`
	min-height: 90vh;
	padding-top: 20vh;
	position: relative;
	text-align: center;
	h2 {
		position: absolute;
		top: 7%;
		left: 50%;
		transform: translate(-50%, -10%);
		img{
			height:3rem;
			width:3rem;
		}
	}
	img {
		width: 80%;
		height: 90vh;
		object-fit: cover;
		border-radius: 1rem;
	}
	a{
		cursor: pointer;
		color: white;
	}
	@media (max-width: 1700px) {
		min-height: 40vh;
		img {
			object-fit: contain;
			height: 40vh;
		}
	}
`;
const Comments = styled.div`
	min-height: 80vh;
	display: flex;
	margin: 5rem 10rem;
	align-items: center;
	justify-content: space-around;
	@media (max-width: 1500px) {
		display: block;
		margin: 2rem 2rem;
	}
`;
const CommentsStyle = styled.div`
	padding: 5rem;
	width: 70rem;
	min-height: 30rem;
	h3 {
		font-size: 2rem;
	}
	.line {
		width: 100%;
		background: #23d997;
		height: 0.5rem;
		margin: 1rem 0rem;
	}
	p {
		padding: 2rem 0rem;
	}
	@media (max-width: 1500px) {
		padding: 0rem;
		width: 100%;
		min-height: 20rem;
	}
`;
const ImageDisplay = styled.div`
	min-height: 50vh;
	text-align: center;

	img {
		width: 80%;
		height: 100vh;
		object-fit: cover;
		border-radius: 1rem;
	}
	@media (max-width: 1700px) {
		img {
			object-fit: contain;
			height: 40vh;
		}
	}
`;

//Coment Component
const Coment = ({ title, description }) => {
	return (
		<CommentsStyle>
			<h3>{title}</h3>
			<div className="line"></div>
			<p>{description}</p>
		</CommentsStyle>
	);
};

export default MovieDetail;
