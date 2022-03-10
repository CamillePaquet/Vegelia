import useStyles from "./DetailsRecipe.style";
import { useParams } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHourglassStart } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
// import data from "../data.json";

const ButtonLike = lazy(() => import("./ButtonLike"));

function DetailsRecipe() {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch({ type: "FETCH_RECIPE", payload: id });
    // eslint-disable-next-line
  }, [dispatch]);

  // const recipe = data.recipes.filter((item) => item.id == id)[0];

  var recipe = useSelector((state) => state.recipe);

  useEffect(() => {
    if (recipe != {} && recipe.id == id) {
      setIsLoading(false);
    }
    // eslint-disable-next-line
  }, [useSelector((state) => state.recipe)]);

  if (!isLoading) {
    return (
      <>
        <div className={classes.ingredientsContainer}>
          <div
            className={classes.rootContainer}
            style={{
              backgroundImage: `url(${recipe.image}) `,
            }}
          >
            <div className={classes.leftContainer}>
              <h1 className={classes.title}>{recipe.title}</h1>
              <p>
                <FaHourglassStart className={classes.icon} />
                {recipe.readyInMinutes} minutes
              </p>
              <Suspense fallback={<div>Loading...</div>}>
                <ButtonLike recipe={recipe} text="Like" />
              </Suspense>
            </div>
          </div>
        </div>
        <div className={classes.infosContainer}>
          <div className={classes.stageContainer}>
            <h2 className={classes.h2}>
              Ingredients (<BsFillPersonFill className={classes.icon} />{" "}
              {recipe.servings})
            </h2>

            <ul>
              {recipe.extendedIngredients.map((ingredient, index) => (
                <li
                  className={classes.listElementIngredients}
                  key={ingredient.id}
                >
                  <p className={classes.descriptionStep}>
                    {ingredient.name} :{" "}
                    <strong>
                      {" "}
                      {ingredient.measures.metric.amount}{" "}
                      {ingredient.measures.metric.unitLong}{" "}
                    </strong>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.stageContainer}>
            <h2 className={classes.h2}>Preparation</h2>
            <ul>
              {recipe.analyzedInstructions[0].steps.map((step, index) => (
                <li className={classes.listElementStep} key={step.number}>
                  <h3 className={classes.h3}> {step.number}</h3>
                  <p className={classes.descriptionStep}> {step.step}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
  return <div>ca charge</div>;
}

export default DetailsRecipe;
