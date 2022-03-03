import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import { PaletteMode } from "@mui/material";

import Header from "./components/header";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import Footer from "./components/footer";
import { InitialState } from "./redux/types";
import { getModeFromStorage } from "./redux/thunk-actions";

import "./_base.scss";

function App() {
	const mode: PaletteMode = useSelector((state: InitialState) => state.ui.mode);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getModeFromStorage());
	}, [dispatch]);

	const theme = createTheme({
		palette: {
			mode: mode,
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Paper className="App" elevation={0}>
				<Paper className="App__content" elevation={0}>
					<Header></Header>
					<Routes>
						<Route
							path="/"
							element={<Navigate to={"/home"}></Navigate>}
						></Route>
						<Route path="/home" element={<Home></Home>}></Route>
						<Route
							path="/:country_name"
							element={<CountryDetail></CountryDetail>}
						></Route>
					</Routes>
					<Footer></Footer>
				</Paper>
			</Paper>
		</ThemeProvider>
	);
}

export default App;
