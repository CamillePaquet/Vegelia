import { call, all, put, takeLatest } from "redux-saga/effects";
import { recipesSlice } from "./slices";

async function httpClient(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.recipes;
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
  yield all([watchRecipes()]);
}
