import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Hero from "@/components/home/Hero";
import MainNav from "@/components/navigation/MainNav";

//Hero Section
describe("Hero", () => {
  it("renders a heading", () => {
    render(<Hero />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});

describe("Hero", () => {
  it("renders a paragraph with correct text", () => {
    render(<Hero />);
    const paragraph = screen.getByText(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati officiis, deleniti quos vel perferendis corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    );
    expect(paragraph).toBeInTheDocument();
  });
});

//MainNav
describe("MainNav", () => {
  it("renders a link that with name Top Posts", () => {
    render(<MainNav />);
    const link = screen.getByRole("link", { name: "Top Posts" });
    expect(link).toBeInTheDocument();
  });
});
describe("MainNav", () => {
  it("renders a link that with name All Posts", () => {
    render(<MainNav />);
    const link = screen.getByRole("link", { name: "All Posts" });
    expect(link).toBeInTheDocument();
  });
});
