import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  ingredientsContainer: {
    display: "flex",
    alignItems: "center",
    margin: "2% 5%",
  },
  leftContainer: {
    background: "#e5e3cc",
    padding: "3%",
    flex: 1,
    marginRight: "1.5em",
  },
  title: {
    color: "white",
    margin: 0,
    textAlign: "center",
  },
  rightContainer: {
    textAlign: "right",
    flex: 1,
  },
  stageContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    margin: "0 10%",
    gap: "0 3em",
  },
  listElementStep: {
    fontWeight: 900,
    listStyle: "none",
    color: "#7c9193",
  },
  h2: {
    background: "#baceb3",
    color: "white",
    padding: "1% 0 1% 3%",
  },
  descriptionStep: {
    padding: " 0 0.5em",
  },
  infosContainer: {
    display: "flex",
  },
  timeContainer: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "end",
    textAlign: "end",
    justifyContent: "end",
  },
  tab: {
    marginTop: "1em",
    borderSpacing: "40px 0px",
  },
  listElement: {
    textAlign: "center",
  },
});

export default useStyles;
