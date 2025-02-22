import { render } from "@testing-library/react";
import NotFound from "../not-found";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

describe("NotFound", () => {
  it("should render and redirect to home page", () => {
    const { container } = render(<NotFound />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should call router.push with /", () => {
    const mockPush = jest.fn();
    jest
      .spyOn(require("next/navigation"), "useRouter")
      .mockImplementation(() => ({
        push: mockPush,
      }));

    render(<NotFound />);
    expect(mockPush).toHaveBeenCalledWith("/");
  });
});
