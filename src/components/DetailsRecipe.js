import useStyles from "./DetailsRecipe.style";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "../data.json";

// faire un fetch par id ici

function DetailsRecipe() {
  const classes = useStyles();
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_RECIPE", payload: id });
  }, [dispatch]);
  // const recipe = data.recipes.filter((item) => item.id == id)[0];
  const recipe = useSelector((state) => state.recipe);

  return (
    <>
      <div className={classes.ingredientsContainer}>
        <div className={classes.leftContainer}>
          <h1 className={classes.title}>{recipe.title}</h1>
          <ul>
            {recipe.extendedIngredients.map((ingredient, index) => (
              <li className={classes.listElement} key={ingredient.id}>
                {ingredient.name}
              </li>
            ))}
            <li></li>
          </ul>
        </div>
        <div className={classes.rightContainer}>
          <img src={recipe.image}></img>
        </div>
      </div>
      <div className={classes.stageContainer}></div>
    </>
  );
}

export default DetailsRecipe;
