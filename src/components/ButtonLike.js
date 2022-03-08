import useStyles from "./ButtonLike.style";
import { useCallback, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
function ButtonLike(props) {
  const [value, setValue] = useState("");
  const classes = useStyles();

  return (
    <button className={classes.button}>
      {" "}
      <FaHeart className={classes.icon} /> Like
    </button>
  );
}

export default ButtonLike;
