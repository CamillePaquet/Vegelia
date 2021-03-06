import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import useStyles from "./GridCard.style";

const CardRecipe = lazy(() => import("./CardRecipe"));

function GridCard({ recipes }) {
  const classes = useStyles();
  const allRecipes = Array.from(recipes);

  return (
    <div>
      <ul className={classes.root} data-testid="content">
        {allRecipes.map((recipe, index) => (
          <li className={classes.listElement} key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`} className={classes.link}>
              <Suspense fallback={<div>Loading...</div>}>
                <CardRecipe recipe={recipe} index={index}></CardRecipe>
              </Suspense>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GridCard;
