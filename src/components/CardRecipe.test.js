import { screen, render } from "@testing-library/react";
import CardRecipe from "./CardRecipe";
import recipe from "../data_recipe.json";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
describe("CardRecipe", () => {
  it("have all details", () => {
    const initialState = { favorites: recipe };
    const mockStore = configureStore();
    render(
      <Provider store={mockStore(initialState)}>
        <CardRecipe recipe={recipe} index={2} />
      </Provider>
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText("Bacon Wrapped Breadsticks")).toBeInTheDocument();
  });
});
