import InputSearch from "./InputSearch";
import GridCard from "./GridCard";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "../data.json";
import { useSearchParams } from "react-router-dom";

import useStyles from "./Home.style";

function Home() {
  const classes = useStyles();
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_RECIPES" });
  }, [dispatch]);

  const [value, setValue] = useState(searchParams.get("recipe"));
  const onChange = useCallback(
    (event) => {
      setValue(event.target.value);
      setSearchParams(event.target.value ? { recipe: event.target.value } : {});
    },
    [setSearchParams]
  );

  var recipes = useSelector((state) => state.recipes);

  if (value) {
    recipes = recipes.filter((recipe) =>
      recipe.title.match(new RegExp(value, "i"))
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.input}>
        <InputSearch value={value} onChange={onChange}></InputSearch>
      </div>
      <GridCard recipes={recipes}></GridCard>
    </div>
  );
}

export default Home;
