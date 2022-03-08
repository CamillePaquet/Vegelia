import { Link } from "react-router-dom";

import useStyles from "./Header.style";
import like from "../assets/heart.png";
import logo from "../assets/logo.png";
function Header() {
  const classes = useStyles();

  return (
    <header className={classes.container}>
      <Link to="/">
        <img className={classes.logo} src={logo}></img>
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
