import { useMemo } from "react";

import Paper from "@mui/material/Paper";

import "./index.scss";
import { useSelector } from "react-redux";
import { InitialState } from "../../redux/types";

export default function Loader() {
	const mode = useSelector((state: InitialState) => state.ui.mode);

	const colorSx = useMemo(() => {
		return mode === "dark"
			? { backgroundColor: "rgb(255, 255, 155)" }
			: { backgroundColor: "rgb(0,0,0)" };
	}, [mode]);

	return (
		<Paper
			elevation={0}
			sx={{ mt: 5, display: "flex", justifyContent: "center", width: "100%" }}
		>
			<Paper className="pillar one" sx={colorSx}></Paper>
			<Paper className="pillar two" sx={colorSx}></Paper>
			<Paper className="pillar three" sx={colorSx}></Paper>
		</Paper>
	);
}
