import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  ingredientsContainer: {
    position: "relative",
  },
  leftContainer: {
    background: "#baceb3",
    margin: "auto",
    position: "absolute",
    top: "10px",
    left: "15%",
    bottom: "13px",
    width: "35%",
  },
  title: {
    color: "white",
    margin: 0,
  },
  rightContainer: {
    textAlign: "right",
    margin: "5% 15%",
  },
});

export default useStyles;
