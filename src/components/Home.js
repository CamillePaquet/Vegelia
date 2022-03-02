import InputSearch from "./InputSearch";
import GridCard from "./GridCard";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./Home.style";

function Home() {
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_RECIPES" });
  }, [dispatch]);

  const recipes = useSelector((state) => state.recipes);

  console.log(recipes);

  return (
    <div className={classes.root}>
      <div className={classes.input}>
        <InputSearch></InputSearch>
      </div>

      <GridCard></GridCard>
    </div>
  );
}

export default Home;
