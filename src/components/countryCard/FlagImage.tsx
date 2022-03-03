import { Country } from "../../redux/types";

export default function FlagImage({ country }: { country: Country }) {
	return (
		<img
			src={country.flag}
			alt={`Flag of ${country.name}`}
			className="flag"
		></img>
	);
}
