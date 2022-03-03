import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { SelectChangeEvent } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { Country } from "../../redux/types";
import { sortCountries } from "../../redux/slices/countries";

type CompareFuncStr =
	| "byNameAtoZ"
	| "byNameZtoA"
	| "byCapitalAtoZ"
	| "byCapitalZtoA"
	| "byPopulationAsc"
	| "byPopulationDesc";

type SortFuncs = {
	[key in CompareFuncStr]: (a: Country, b: Country) => number;
};

const sortFunctions: SortFuncs = {
	byNameAtoZ: (a, b) => a.name.localeCompare(b.name),
	byNameZtoA: (a, b) => b.name.localeCompare(a.name),
	byCapitalAtoZ: (a, b) =>
		(a.capital || "ZZZZZ").localeCompare(b.capital || "ZZZZ"),
	byCapitalZtoA: (a, b) =>
		(b.capital || "ZZZZZ").localeCompare(a.capital || "ZZZZ"),
	byPopulationAsc: (a, b) => a.population - b.population,
	byPopulationDesc: (a, b) => b.population - a.population,
};

export default function SortOptions() {
	const [sortString, setSortString] = useState<CompareFuncStr>(
		() => "byNameAtoZ"
	);
	const dispatch = useDispatch();

	const handleChange = useCallback(
		function (e: SelectChangeEvent) {
			const value = e.target.value;
			dispatch(sortCountries(sortFunctions[value as CompareFuncStr]));
			setSortString(value as CompareFuncStr);
		},
		[dispatch]
	);

	return (
		<FormControl>
			<InputLabel id="sort-countries-by-label">Sort</InputLabel>
			<Select
				labelId="sort-countries-by"
				id="sort-countries-by-options"
				value={sortString}
				label="sort"
				onChange={handleChange}
			>
				<MenuItem value={"byNameAtoZ"}>Name (A-Z)</MenuItem>
				<MenuItem value={"byNameZtoA"}>Name (Z-A)</MenuItem>
				<MenuItem value={"byCapitalAtoZ"}>Capital (A-Z)</MenuItem>
				<MenuItem value={"byCapitalZtoA"}>Capital (Z-A)</MenuItem>
				<MenuItem value={"byPopulationAsc"}>Population (Asc)</MenuItem>
				<MenuItem value={"byPopulationDesc"}>Population (desc)</MenuItem>
			</Select>
		</FormControl>
	);
}
