import Container from "@mui/material/Container";

import CountryTable from "../components/countryTable";
import SearchBar from "../components/searchbar";
import SortOption from "../components/sort";
import BackToTop from "../components/backtotop";

import "./styles.scss";

export default function Home() {
	return (
		<>
			<Container className="intro" id="top">
				<h1 className="intro__header">COUNTRY DATA</h1>
				<span className="intro__description">
					Detailed info of each country
				</span>
			</Container>
			<SearchBar></SearchBar>
			<SortOption></SortOption>
			<CountryTable></CountryTable>
			<BackToTop></BackToTop>
		</>
	);
}
