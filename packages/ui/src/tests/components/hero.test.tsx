import { render } from "@testing-library/react";
import { HeroSection } from "../../components/hero";

describe("HeroSection", () => {
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(<HeroSection />);

    expect(asFragment()).toMatchSnapshot();
  });
});
