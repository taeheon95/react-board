import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoForm from ".";

interface Todo {
  id: number;
  todo: string;
}

test("todo", () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  render(<TodoForm todoList={todoList} setTodoList={setTodoList} />);
  const inputElement = screen.getByPlaceholderText("할 일을 입력하세요.");
  expect(inputElement).toBeInTheDocument();
});

test("todo change event", () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  render(<TodoForm todoList={todoList} setTodoList={setTodoList} />);
  const inputElement = screen.getByPlaceholderText("할 일을 입력하세요.");
  fireEvent.change(inputElement, {
    target: {
      value: "할 일",
    },
  });
  expect(inputElement).toHaveAttribute("value", "할 일");
});
