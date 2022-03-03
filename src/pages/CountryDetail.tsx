import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import CountryCard from "../components/countryCard";
import Paper from "@mui/material/Paper";

import { InitialState } from "../redux/types";
import { Country } from "../redux/types";

import "./styles.scss";

export default function CountryDetail() {
	const countries = useSelector((state: InitialState) => state.countries);
	const { country_name } = useParams();
	const country = countries.data.find(
		(c: Country) => c.name === country_name
	) as Country;
	return (
		<Paper className="country-page" elevation={0}>
			<CountryCard country={country}></CountryCard>
		</Paper>
	);
}
