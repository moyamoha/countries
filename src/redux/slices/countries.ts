import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country } from "../types";

export type CountriesStateType = {
	data: Country[];
	loading: boolean;
	filterWord: string;
};

const initialState: CountriesStateType = {
	data: [],
	filterWord: "",
	loading: true,
};

export const countriesSlice = createSlice({
	name: "favorites",
	initialState: initialState,
	reducers: {
		setData: (state, action: PayloadAction<Country[]>) => {
			state.data = action.payload;
			state.loading = false;
		},
		sortCountries: (
			state,
			action: PayloadAction<(a: Country, b: Country) => number>
		) => {
			state.data.sort(action.payload);
		},
		setFilter: (state, action: PayloadAction<string>) => {
			state.filterWord = action.payload;
		},
	},
});

export const { setData, sortCountries, setFilter } = countriesSlice.actions;

export default countriesSlice.reducer;
