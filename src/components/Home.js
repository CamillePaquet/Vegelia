import InputSearch from "./InputSearch";
import GridCard from "./GridCard";

import useStyles from "./Home.style";

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.input}>
        <InputSearch></InputSearch>
      </div>

      <GridCard></GridCard>
    </div>
  );
}

export default Home;
