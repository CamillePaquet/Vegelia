import { screen, render } from "@testing-library/react";
import InputSearch from "./InputSearch";

describe("InputSearch", () => {
  it("render a button to like", () => {
    function mock() {
      console.log("ok");
    }
    render(<InputSearch value={"test"} onChange={mock} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
