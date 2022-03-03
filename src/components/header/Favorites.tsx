import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { showFavorites } from "../../redux/slices/favorites";
import { InitialState } from "../../redux/types";

export default function Favorites() {
	const countOfFavs = useSelector(
		(state: InitialState) => state.favorites.count
	);
	const dispatch = useDispatch();

	const chooseData = useCallback(() => {
		dispatch(showFavorites());
	}, [dispatch]);

	return (
		<IconButton
			onClick={chooseData}
			color="inherit"
			aria-label="show-favorites"
		>
			<Badge badgeContent={countOfFavs} color="info">
				<FavoriteIcon></FavoriteIcon>
			</Badge>
		</IconButton>
	);
}
