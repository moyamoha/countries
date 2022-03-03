import { CountriesStateType } from "./slices/countries";
import { FavsStateType } from "./slices/favorites";
import { UiType } from "./slices/ui";

type Currency = {
	name: string;
};

type Lang = {
	name: string;
};

export type Country = {
	name: string;
	region: string;
	capital?: string;
	population: number;
	flag: string;
	languages?: Lang[];
	currencies?: Currency[];
	borders: string[];
	timezones: string[];
	nativeName?: string;
};

export type InitialState = {
	countries: CountriesStateType;
	favorites: FavsStateType;
	ui: UiType;
};
