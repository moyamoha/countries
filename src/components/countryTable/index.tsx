import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

import { InitialState } from "../../redux/types";
import CountryTableHead from "./CountryTableHead";
import CountryTableBody from "./CountryTableBody";
import Loader from "./../loader";
import CountriesAsList from "../CountryList";
import { toggleSmallScreen } from "../../redux/slices/ui";

export default function CountryTable() {
	const isLoading = useSelector(
		(state: InitialState) => state.countries.loading
	);

	const dispatch = useDispatch();
	const screenSizeIsSmall = useSelector(
		(state: InitialState) => state.ui.smallScreen
	);

	const changeUiState = useCallback(() => {
		if (window.innerWidth < 750) {
			dispatch(toggleSmallScreen(true));
		} else {
			dispatch(toggleSmallScreen(false));
		}
	}, [dispatch]);
	useEffect(() => {
		window.addEventListener("resize", changeUiState);
		return () => {
			window.removeEventListener("resize", changeUiState);
		};
	}, [changeUiState]);

	return (
		<>
			{screenSizeIsSmall ? (
				<CountriesAsList></CountriesAsList>
			) : (
				<TableContainer
					component={Paper}
					elevation={0}
					sx={{ overflowX: "initial", tableLayout: "fixed" }}
				>
					<Table stickyHeader>
						<CountryTableHead></CountryTableHead>
						<CountryTableBody></CountryTableBody>
					</Table>
				</TableContainer>
			)}
			{isLoading ? <Loader></Loader> : <></>}
		</>
	);
}
