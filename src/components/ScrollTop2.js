import { useEffect } from "react";

const ScrollTop2 = () => {
	useEffect(() => {
		window.onbeforeunload = function () {
			window.scrollTo(0, 0);
		};
	}, []);
	return null;
};

export default ScrollTop2;
