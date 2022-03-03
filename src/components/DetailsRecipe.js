import useStyles from "./DetailsRecipe.style";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHourglassStart } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

import data from "../data.json";

// faire un fetch par id ici

function DetailsRecipe() {
  const classes = useStyles();
  const { id } = useParams();

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch({ type: "FETCH_RECIPE", payload: id });
  // }, [dispatch]);
  const recipe = data.recipes.filter((item) => item.id == id)[0];
  // const recipe = useSelector((state) => state.recipe);

  return (
    <>
      <div className={classes.ingredientsContainer}>
        <div className={classes.rightContainer}>
          <img src={recipe.image}></img>
        </div>
        <div className={classes.leftContainer}>
          <h1 className={classes.title}>{recipe.title}</h1>
          <div className={classes.infosContainer}>
            <table className={classes.tab}>
              <thead>
                <tr>
                  <th>Quantités</th>
                  <th>Ingrédients</th>
                </tr>
              </thead>
              <tbody>
                {recipe.extendedIngredients.map((ingredient, index) => (
                  <tr key={ingredient.id}>
                    <td className={classes.listElement}>
                      {ingredient.measures.metric.amount}{" "}
                      {ingredient.measures.metric.unitLong}
                    </td>
                    <td className={classes.listElement}>{ingredient.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ul></ul>
            <div className={classes.timeContainer}>
              <p>
                <FaHourglassStart className={classes.icon} />
                {recipe.readyInMinutes} minutes
              </p>
              <p>
                <BsFillPersonFill className={classes.icon} />
                {recipe.servings} personnes
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.stageContainer}>
        {recipe.analyzedInstructions[0].steps.map((step, index) => (
          <div className={classes.flexLeft}>
            <li className={classes.listElementStep} key={step.number}>
              <h2 className={classes.h2}> Etape {step.number}</h2>
              <p className={classes.descriptionStep}>{step.step}</p>
            </li>
          </div>
        ))}
      </div>
    </>
  );
}

export default DetailsRecipe;
