import { screen, render } from "@testing-library/react";
import GridCard from "./GridCard";
import recipes from "../data.json";

describe("GridCard", () => {
  it("have all details", async () => {
    render(<GridCard recipes={recipes} />);
    expect(screen.getByTestId("content")).toBeInTheDocument();
  });
});
