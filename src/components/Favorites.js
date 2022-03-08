import useStyles from "./Favorites.style";
import GridCard from "./GridCard";

import { useDispatch, useSelector } from "react-redux";
import { favoritesSlice } from "../slices";

function Favorites() {
  const classes = useStyles();
  const recipes = useSelector((state) => state.favorites);

  return <GridCard recipes={recipes}></GridCard>;
}

export default Favorites;
