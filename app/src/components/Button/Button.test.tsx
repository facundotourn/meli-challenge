import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Button from "./index";

describe("<Button />", () => {
  test("renders its children", () => {
    const component = render(
      <Button>
        <h1>test children</h1>
      </Button>
    );

    expect(component.container).toHaveTextContent("test children");
    const h1 = component.container.querySelector("h1");
    expect(h1).toBeDefined();
  });
});
