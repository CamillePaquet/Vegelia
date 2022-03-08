import useStyles from "./ButtonLike.style";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favoritesSlice } from "../slices";
import { FaHeart } from "react-icons/fa";
function ButtonLike({ recipe, text }) {
  const [value, setValue] = useState("");
  const classes = useStyles();

  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const addToFavorite = (event) => {
    event.preventDefault();
    dispatch(favoritesSlice.actions.toggle({ recipe }));
  };

  return (
    <button onClick={addToFavorite} className={classes.button}>
      <FaHeart className={classes.icon} /> {text}
    </button>
  );
}

export default ButtonLike;
