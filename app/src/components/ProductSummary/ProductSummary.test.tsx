import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import ProductSummary from "./index";

describe("<ProductSummary />", () => {
  test("renders correctly", () => {
    const props = {
      item: {
        id: "test-id",
        price: { amount: 2525 },
        picture: "test-picture",
        title: "test-title",
        free_shipping: true,
        state: "new",
      },
      onProductClick: () => {},
    };

    const component = render(<ProductSummary {...props} />);

    const thumbnail = component.container.querySelector(
      "img.img-product-summary"
    );
    expect(thumbnail?.getAttribute("src")).toEqual(props.item.picture);
    expect(thumbnail?.getAttribute("alt")).toEqual(props.item.id);

    const freeShipping = component.container.querySelector(
      'img[alt="free shipping"]'
    );
    expect(freeShipping).toBeDefined();

    const title = component.container.querySelector(".p-title");
    expect(title?.textContent).toEqual(props.item.title);

    const location = component.container.querySelector(
      ".details-location-column span"
    );
    expect(location?.textContent).toEqual(props.item.state);
  });

  test("nonfree shipping product should not render free shipping icon", () => {
    const props = {
      item: {
        id: "test-id",
        price: { amount: 2525 },
        picture: "test-picture",
        title: "test-title",
        free_shipping: false,
        state: "new",
      },
      onProductClick: () => {},
    };

    const component = render(<ProductSummary {...props} />);

    const freeShipping = component.container.querySelector(
      'img[alt="free shipping"]'
    );
    expect(freeShipping).toBeFalsy();
  });
});
