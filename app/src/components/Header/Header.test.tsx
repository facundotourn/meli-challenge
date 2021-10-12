import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./index";

describe("<Header />", () => {
  test("renders correctly", () => {
    const component = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const searchInput = component.container.querySelector("input");
    expect(searchInput?.placeholder).toEqual("Nunca dejes de buscar");
  });
});
