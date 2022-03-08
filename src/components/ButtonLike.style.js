import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    padding: "0.5em 1em",
    background: "none",
    border: "none",
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
    "&:hover": {
      color: "orange",
    },
  },
  buttonLiked: {
    padding: "0.5em 1em",
    background: "none",
    border: "none",
    color: "orange",
    fontSize: "20px",
    cursor: "pointer",
    "&:hover": {
      color: "grey",
    },
  },
});

export default useStyles;
