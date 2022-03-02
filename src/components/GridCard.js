import { Link } from "react-router-dom";
import useStyles from "./GridCard.style";
import CardRecipe from "./CardRecipe";

function GridCard({ recipes }) {
  const classes = useStyles();
  return (
    <div>
      <ul className={classes.root}>
        {recipes.map((recipe, index) => (
          <li className={classes.listElement} key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`} className={classes.link}>
              <CardRecipe recipe={recipe} index={index}></CardRecipe>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GridCard;
