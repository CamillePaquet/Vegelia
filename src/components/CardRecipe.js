import useStyles from "./CardRecipe.style";
import { FaHeart } from "react-icons/fa";
import ButtonLike from "./ButtonLike";

function CardRecipe({ recipe, index }) {
  const classes = useStyles();

  var color = "";
  if (index % 2 == 0) {
    color = "green";
  } else if (index % 3 == 1) {
    color = "blue";
  } else {
    color = "grey";
  }

  return (
    <div className={classes.root}>
      <div
        className={
          color == "blue"
            ? classes.blue
            : color == "grey"
            ? classes.grey
            : classes.green
        }
      >
        <ButtonLike recipe={recipe} text=""></ButtonLike>

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
