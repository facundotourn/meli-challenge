import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Price from "./index";

describe("<Price />", () => {
  test("renders correctly", () => {
    const props = {
      amount: 200,
    };

    const component = render(<Price {...props} />);
    const entero = component.container.querySelector(".integer-price");
    expect(entero?.textContent).toEqual("$ 200");
  });

  test("exponentialCents renders two text elements", () => {
    const props = {
      amount: 200.25,
      exponentialCents: true,
    };

    const component = render(<Price {...props} />);
    const entero = component.container.querySelector(".integer-price");
    const decimal = component.container.querySelector(".decimal-price");

    expect(entero?.textContent).toEqual("$ 200");
    expect(decimal?.textContent).toEqual("25");
  });
});
