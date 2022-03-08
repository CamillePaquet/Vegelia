import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "1em 2em",
  },
  logo: {
    width: "150px",
  },
  heart: {
    width: "1.5em",
  },
  favorites: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    textDecoration: "none",
  },
});

export default useStyles;
