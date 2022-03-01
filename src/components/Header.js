import { Link } from "react-router-dom";

import useStyles from "./Header.style";
import like from "../assets/heart.png";

function Header() {
  const classes = useStyles();

  return (
    <header className={classes.container}>
      <Link className={classes.logo} to="/">
        <h1 className={classes.title}>Vegelia</h1>
      </Link>
      <Link className={classes.favorites} to="/favorites">
        <img className={classes.heart} src={like}></img>
        <span>Mes favoris</span>
      </Link>
    </header>
  );
}

Header.defaultProps = {
  favorites: [],
};

export default Header;
