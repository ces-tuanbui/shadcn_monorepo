import { render, screen } from "@testing-library/react";
import { FooterSection } from "../../components/ui/footer";
import "@testing-library/jest-dom";

describe("FooterSection Component", () => {
  it("renders the footer correctly", () => {
    render(<FooterSection />);

    expect(screen.getByText("Shadcn")).toBeInTheDocument();

    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Platforms")).toBeInTheDocument();
    expect(screen.getByText("Help")).toBeInTheDocument();
    expect(screen.getByText("Socials")).toBeInTheDocument();

    const links = [
      "Github",
      "Twitter",
      "Instagram",
      "iOS",
      "Android",
      "Web",
      "Contact Us",
      "FAQ",
      "Feedback",
      "Twitch",
      "Discord",
      "Dribbble",
    ];

    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });

    expect(
      screen.getByText(/© 2024 Designed and developed by/i)
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /Leo Miranda/i })).toHaveAttribute(
      "href",
      "https://github.com/leoMirandaa"
    );
  });
});
