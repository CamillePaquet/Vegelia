import { screen, render } from "@testing-library/react";
import ButtonLike from "./ButtonLike";
import recipe from "../data_recipe.json";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("ButtonLike", () => {
  it("render a button to like", () => {
    const initialState = { favorites: recipe };
    const mockStore = configureStore();
    render(
      <Provider store={mockStore(initialState)}>
        <ButtonLike recipe={recipe} text="Like" />
      </Provider>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
