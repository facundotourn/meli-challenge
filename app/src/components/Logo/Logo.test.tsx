import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Logo from "./index";

describe("<Logo />", () => {
  test("renders properly", () => {
    const component = render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );

    const img = component.container.querySelector("img[alt=logo]");
    expect(img).toBeDefined();
  });
});
