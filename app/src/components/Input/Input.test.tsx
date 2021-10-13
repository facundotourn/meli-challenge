import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
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

  test("input submit executes handler 1 time", () => {
    const mockHandler = jest.fn();

    const props = {
      placeholder: "placeholder-test",
      onSubmit: mockHandler,
    };
    const component = render(<Input {...props} />);
    const input = component.getByPlaceholderText(props.placeholder);

    fireEvent.submit(input);

    expect(mockHandler).toBeCalledTimes(1);
  });
});
