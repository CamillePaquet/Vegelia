import { screen, render } from "@testing-library/react";
import ButtonLike from "./ButtonLike";
import recipe from "../data_recipe.json";
import App from "../App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);

describe("ButtonLike", () => {
  beforeAll(() => {});

  it("renders nothing without `id`", () => {
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
