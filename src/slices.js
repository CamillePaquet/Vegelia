import { createSlice } from "@reduxjs/toolkit";

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: [],
  reducers: {
    add: (state, action) => [
      ...state,
      ...action.payload.recipes.recipes.filter(
        (recipe) => !state.some(({ id }) => recipe.id === id)
      ),
    ],
  },
});

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: [],
  reducers: {
    add: (state, action) => action.payload.recipe,
  },
});
