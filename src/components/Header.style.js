import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 2em",
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
