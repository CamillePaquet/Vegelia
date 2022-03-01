import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Favorites from "./components/Favorites.js";
import DetailsRecipe from "./components/DetailsRecipe.js";

import useStyles from "./App.style";

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Header />
      <main className={classes.root}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:id" element={<DetailsRecipe />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
