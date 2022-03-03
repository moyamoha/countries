import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

import { setFilter } from "../../redux/slices/countries";

export default function SearchBar() {
	const [searchInput, setSearchInput] = useState("");
	const dispatch = useDispatch();
	const theme = useTheme();

	const handleSubmit = useCallback(
		function (e) {
			e.preventDefault();
			dispatch(setFilter(searchInput));
		},
		[dispatch, searchInput]
	);

	const filterData = useCallback(
		function (e) {
			setSearchInput(e.target.value);
			dispatch(setFilter(e.target.value));
		},
		[dispatch]
	);

	return (
		<Paper
			component="form"
			sx={{
				p: "2px 4px",
				display: "flex",
				alignItems: "center",
				fontSize: "1.5rem",
				width: "100%",
				mb: "2rem",
				border: "1px solid orange",
			}}
			className="search-form"
			elevation={theme.palette.mode === "light" ? 0 : 5}
			onSubmit={handleSubmit}
		>
			<IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
				<SearchIcon />
			</IconButton>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="Search by name, region or capital"
				inputProps={{ "aria-label": "Search by name, region or capital" }}
				value={searchInput}
				onChange={filterData}
			/>
		</Paper>
	);
}
