import useStyles from "./Footer.style";
import logo from "../assets/logo.png";
function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <img className={classes.logo} src={logo}></img>
    </footer>
  );
}

export default Footer;
