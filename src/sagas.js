import { call, all, put, takeLatest } from "redux-saga/effects";
import { recipesSlice, recipeSlice } from "./slices";

async function httpClient(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// worker Saga
export function* fetchRecipes() {
  try {
    const recipes = yield call(
      httpClient,
      `${process.env.REACT_APP_API_URL}/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=100`
    );
    yield put(recipesSlice.actions.add({ recipes }));
  } catch (error) {
    console.log(error);
  }
}

// watcher Saga
export function* watchRecipes() {
  yield takeLatest("FETCH_RECIPES", fetchRecipes);
}

// root Saga
export function* rootSaga() {
  yield all([watchRecipes(), watchRecipe()]);
}

// worker Saga
export function* fetchRecipe(action) {
  const id = action.payload;

  try {
    const recipe = yield call(
      httpClient,
      `${process.env.REACT_APP_API_URL}/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    yield put(recipeSlice.actions.add({ recipe }));
  } catch (error) {
    console.log(error);
  }
}

// watcher Saga
export function* watchRecipe() {
  yield takeLatest("FETCH_RECIPE", fetchRecipe);
}
