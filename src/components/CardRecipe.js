import useStyles from "./CardRecipe.style";
import { lazy, Suspense } from "react";
const ButtonLike = lazy(() => import("./ButtonLike"));

function CardRecipe({ recipe, index }) {
  const classes = useStyles();

  var color = "";
  if (index % 2 === 0) {
    color = "green";
  } else if (index % 3 === 1) {
    color = "blue";
  } else {
    color = "grey";
  }

  return (
    <div className={classes.root}>
      <div
        className={
          color === "blue"
            ? classes.blue
            : color === "grey"
            ? classes.grey
            : classes.green
        }
      >
        <Suspense fallback={<div>Loading...</div>}>
          <ButtonLike recipe={recipe} text=""></ButtonLike>
        </Suspense>

        <p className={classes.title}> {recipe.title}</p>
      </div>
      <img
        className={classes.img}
        src={`${recipe.image}`}
        alt="affiche du film"
      ></img>
    </div>
  );
}

export default CardRecipe;
