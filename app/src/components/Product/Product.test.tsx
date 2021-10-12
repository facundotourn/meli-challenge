import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Product from "./index";

describe("<Product />", () => {
  test("renders correctly", () => {
    const props = {
      product: {
        id: "test-id",
        title: "test-title",
        picture: "test-picture",
        price: { amount: 200 },
        description: "test-descripcion",
        soldQuantity: 100,
        condition: "new",
        free_shipping: true,
        state: "test-state",
        categories: ["1", "2", "3"],
      },
    };
    const component = render(<Product {...props} />);

    const photo = component.container.querySelector('img[alt="product"]');
    expect(photo?.getAttribute("src")).toEqual(props.product.picture);

    const sales = component.container.querySelector("p.product-sales");
    expect(sales?.textContent).toEqual(
      `Nuevo - ${props.product.soldQuantity} vendidos`
    );

    const title = component.container.querySelector("p.title");
    expect(title?.textContent).toEqual(props.product.title);

    const description = component.container.querySelector(
      "p.description-content"
    );
    expect(description?.textContent).toEqual(props.product.description);
  });

  test("products with no description should not render description-wrapper", () => {
    const props = {
      product: {
        id: "test-id",
        title: "test-title",
        picture: "test-picture",
        price: { amount: 200 },
        soldQuantity: 100,
        condition: "new",
        free_shipping: true,
        state: "test-state",
        categories: ["1", "2", "3"],
      },
    };
    const component = render(<Product {...props} />);

    const wrapper = component.container.querySelector(".description-wrapper");
    expect(wrapper).toBeFalsy();
  });

  test("no sold products should not render sales text", () => {
    const props = {
      product: {
        id: "test-id",
        title: "test-title",
        picture: "test-picture",
        price: { amount: 200 },
        soldQuantity: 0,
        condition: "new",
        free_shipping: true,
        state: "test-state",
        categories: ["1", "2", "3"],
      },
    };
    const component = render(<Product {...props} />);

    const sales = component.container.querySelector("p.product-sales");
    expect(sales?.textContent).toEqual(`Nuevo`);
  });
});
