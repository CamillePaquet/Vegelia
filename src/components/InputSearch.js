import useStyles from "./InputSearch.style";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

function InputSearch({ value, onChange }) {
  const classes = useStyles();

  return (
    <input
      className={classes.inputSearch}
      type="text"
      placeholder="Rechercher..."
      value={value}
      onChange={onChange}
    />
  );
}

export default InputSearch;
