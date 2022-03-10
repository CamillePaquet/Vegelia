import { BrowserRouter, Route, Routes } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { recipeSlice, recipesSlice, favoritesSlice } from "./slices";
import { rootSaga } from "./sagas";
import { PersistGate } from "redux-persist/integration/react";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import Home from "./components/Home.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Favorites from "./components/Favorites.js";
import DetailsRecipe from "./components/DetailsRecipe.js";

import useStyles from "./App.style";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    recipes: recipesSlice.reducer,
    recipe: recipeSlice.reducer,
    favorites: favoritesSlice.reducer,
  })
);
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
