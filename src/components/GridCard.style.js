import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(3,auto)",
    gap: "20px 0",
    listStyle: "none",
    padding: "0 10%",
    justifyContent: "center",
  },
  listElement: {
    margin: 0,
  },
  link: {
    textDecoration: "none",
  },
});

export default useStyles;
