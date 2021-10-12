import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Breadcrumb from "./index";

test("renders correctly", () => {
  const path: string[] = ["categoria 1", "categoria 2", "categoria 3"];

  const component = render(<Breadcrumb path={path} />);

  path.forEach((part: string) => {
    expect(component.container).toHaveTextContent(part);
  });

  const img: NodeListOf<HTMLElement> | null =
    component.container.querySelectorAll("img");
  expect(img).toBeTruthy();
  expect(img).toHaveLength(path.length - 1);
});
