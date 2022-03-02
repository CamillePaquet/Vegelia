import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    position: "relative",
  },
  img: {
    width: "100%",
  },
  containerTitle: {
    justifyContent: "right",
    alignItems: "center",
    display: "flex",
    width: "100%",
    height: "3em",
    background: "grey",
    textAlign: "center",
  },
  title: {
    flex: 6,
    textAlign: "right",
    paddingRight: "10px",
    color: "white",
    fontFamily: "futura-pt-condensed, sans-serif",
    fontWeight: 900,
  },
  icon: {
    flex: 1,
    color: "white",
    width: "1em",
  },
  green: {
    justifyContent: "right",
    alignItems: "center",
    display: "flex",
    width: "100%",
    height: "3em",

    textAlign: "center",
    background: "#baceb3",
  },
  blue: {
    justifyContent: "right",
    alignItems: "center",
    display: "flex",
    width: "100%",
    height: "3em",

    textAlign: "center",
    background: "#7d9295",
  },
  grey: {
    justifyContent: "right",
    alignItems: "center",
    display: "flex",
    width: "100%",
    height: "3em",

    textAlign: "center",
    background: "#e5e3cc",
  },
});

export default useStyles;
