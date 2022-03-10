import useStyles from "./InputSearch.style";

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
