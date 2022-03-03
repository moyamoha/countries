import { useState, useEffect, useCallback } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";

export default function BackToTop() {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = useCallback(function () {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	}, []);

	const scrollToTop = useCallback(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, [toggleVisibility]);

	return isVisible ? (
		<IconButton
			onClick={scrollToTop}
			sx={{
				right: 0,
				bottom: 0,
				position: "fixed",
			}}
			size="large"
		>
			<KeyboardArrowUpIcon color="info"></KeyboardArrowUpIcon>
		</IconButton>
	) : (
		<></>
	);
}
