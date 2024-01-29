import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";
import Hero from "@/components/home/Hero";

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
