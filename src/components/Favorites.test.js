import { screen, render } from "@testing-library/react";
import Favorites from "./Favorites";

import recipe from "../data_recipe.json";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Favorites", () => {
  it("have all details", async () => {
    const initialState = { favorites: recipe };
    const mockStore = configureStore();
    render(
      <Provider store={mockStore(initialState)}>
        <Favorites />
      </Provider>
    );
    expect(screen.getByTestId("content")).toBeInTheDocument();
  });
});
