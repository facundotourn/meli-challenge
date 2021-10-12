import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Input from "./index";

describe("<Input />", () => {
  test("renders correctly", () => {
    const props = {
      placeholder: "placeholder-test",
      onSubmit: () => {},
    };
    const component = render(<Input {...props} />);

    const input = component.container.querySelector("input");
    expect(input).toBeDefined();
    expect(input?.placeholder).toEqual(props.placeholder);
  });
});
