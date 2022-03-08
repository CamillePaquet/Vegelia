import useStyles from "./Favorites.style";

import { useDispatch, useSelector } from "react-redux";
import { favoritesSlice } from "../slices";

function Favorites() {
  const classes = useStyles();
  const recipes = useSelector((state) => state.favorites);
  console.log(recipes);
  return <div></div>;
}

export default Favorites;
