import useStyles from "./InputSearch.style";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

function InputSearch(props) {
  const [value, setValue] = useState("");
  const classes = useStyles();

  return (
    <input
      className={classes.inputSearch}
      type="text"
      placeholder="Rechercher..."
    />
  );
}

export default InputSearch;
