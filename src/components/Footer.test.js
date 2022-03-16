import { screen, render } from "@testing-library/react";
import Footer from "./Footer";

import recipe from "../data_recipe.json";

import configureStore from "redux-mock-store";

describe("Footer", () => {
  it("have all details", async () => {
    render(<Footer />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
