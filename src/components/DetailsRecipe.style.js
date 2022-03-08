import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  leftContainer: {
    background: "#baceb3CC",
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    left: "50%",
    width: "50%",
    height: "60%",
    marginRight: "1.5em",
    textAlign: "center",
    boxShadow: "0 0 10px grey",
    color: "white",
    padding: "2em",
  },
  title: {
    margin: 0,
    textAlign: "center",
  },
  rootContainer: {
    textAlign: "right",
    height: "500px",
    position: "relative",
    imageRendering: "auto",
    imageRendering: "crisp-edges",
    imageRendering: "pixelated",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  infosContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "0 3em",
    margin: "0 15em",
  },
  listElementStep: {
    fontWeight: 600,
    color: "#7c9193",
    alignItems: "start",
    display: "flex",
  },
  listElementIngredients: {
    fontWeight: 600,
    color: "#7c9193",
    alignItems: "center",
  },
  h3: {
    background: "#baceb3",
    color: "white",
    display: "inline-block",
    padding: "1% 3% 1% 3%",
  },
  descriptionStep: {
    padding: " 0 0.5em",
  },
  timeContainer: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "end",
    textAlign: "end",
  },
  h2: {
    fontSize: "40px",
    fontWeight: "900",
    "&:after": {
      content: '""',
      backgroundColor: "#7d9295",
      margin: "1em 0.5em",
      width: "10%",
      height: "0.2em",
      display: "block",
      borderRadius: "1em",
    },
  },
});

export default useStyles;
