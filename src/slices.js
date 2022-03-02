import { createSlice } from "@reduxjs/toolkit";

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: [],
  reducers: {
    add: (state, action) => [
      ...state,
      ...action.payload.recipes.filter(
        (recipe) => !state.some(({ id }) => recipe.id === id)
      ),
    ],
  },
});
