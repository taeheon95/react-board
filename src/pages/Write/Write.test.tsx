import React from "react";
import { render, screen } from "@testing-library/react";
import Write from ".";

test("<Write/>", () => {
  render(<Write />);
  const inputElement = screen.getByPlaceholderText("제목을 입력해주세요.");
  expect(inputElement).toBeInTheDocument();
});

test("<Write/> button", () => {
  render(<Write />);
  const buttonElement = screen.getByText("등록");
  expect(buttonElement).toBeInTheDocument();
});
