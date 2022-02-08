import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Write from ".";

test("title 인풋", () => {
  render(<Write />);
  const inputElement = screen.getByPlaceholderText("제목을 입력해주세요.");
  fireEvent.change(inputElement, {
    target: {
      value: "제목",
    },
  });
  expect(inputElement).toHaveAttribute("value", "제목");
});

test("등록 버튼", () => {
  render(<Write />);
  const buttonElement = screen.getByText("등록");
  expect(buttonElement).toBeInTheDocument();
});
