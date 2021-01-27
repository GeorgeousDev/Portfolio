//Import Images
import music1 from "./img/musicApp2.png";
import music2 from "./img/musicApp3.png";
import game1 from "./img/gameApp2.png";
import game2 from "./img/gameApp3.png";

export const MovieState = () => {
	return [
		{
			title: "Music App",
			mainImg: music1,
			secondaryImg: music2,
			url: "/work/music-app",
			urlToWebsite:"https://georgeousdev.github.io/Music-App/",
			comments: [
				{
					title: "Data",
					description:
						"Songs rendered from a free site. The rest is manualy written to simulate retrieving data from a rest api.",
				},
				{
					title: "Technologies",
					description: "Mostly CSS animations, React Hooks, Font Awsome Library.",
				},
				{
					title: "Facilities",
					description:
						"Fully responsive and mobile-friendly.",
				},
			],
		},
		{
			title: "Game App",
			mainImg: game1,
			url: "/work/game-app",
			urlToWebsite:"https://georgeousdev.github.io/Game-App/",
			secondaryImg: game2,
			comments: [
				{
					title: "Data",
					description:
						"All data fetch from REST API.",
				},
				{
					title: "Technologies",
					description:
						"React Router, Styled Components, Framer Motion. ",
				},
				{
					title: "Facilities",
					description:
						"Fully responsive and mobile-friendly.",
				},
			],
		},
	];
};
