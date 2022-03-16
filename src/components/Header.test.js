import { screen, render } from "@testing-library/react";
import Header from "./Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("Header", () => {
  it("have all details", async () => {
    render(
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/favorites" />
          </Routes>
        </BrowserRouter>
      </>
    );
    expect(screen.getAllByRole("img").length).toEqual(2);
    expect(screen.getByText("Mes favoris")).toBeInTheDocument();
  });
});
