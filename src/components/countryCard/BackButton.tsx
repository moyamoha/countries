import { useNavigate } from "react-router";
import Button from "@mui/material/Button";

export default function BackButton() {
	const navigate = useNavigate();
	return (
		<Button
			variant="contained"
			onClick={() => navigate("/")}
			sx={{ mt: 1, width: "100%" }}
			size="large"
			color="success"
		>
			Back
		</Button>
	);
}
