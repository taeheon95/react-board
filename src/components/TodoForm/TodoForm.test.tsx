import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import TodoForm from ".";

interface Todo {
  id: number;
  todo: string;
}

test("todo", () => {
  const { result } = renderHook(() => useState<Todo[]>([]));

  render(
    <TodoForm todoList={result.current[0]} setTodoList={result.current[1]} />
  );
  const inputElement = screen.getByPlaceholderText("할 일을 입력하세요.");
  expect(inputElement).toBeInTheDocument();
});

test("todo change event", () => {
  const { result } = renderHook(() => useState<Todo[]>([]));
  render(
    <TodoForm todoList={result.current[0]} setTodoList={result.current[1]} />
  );
  const inputElement = screen.getByPlaceholderText("할 일을 입력하세요.");
  fireEvent.change(inputElement, {
    target: {
      value: "할 일",
    },
  });
  expect(inputElement).toHaveAttribute("value", "할 일");
});

test("todo add event", () => {
  const { result } = renderHook(() => useState<Todo[]>([]));
  render(
    <TodoForm todoList={result.current[0]} setTodoList={result.current[1]} />
  );
  const inputElement = screen.getByPlaceholderText("할 일을 입력하세요.");
  const buttonElemennt = screen.getByText("+");
  fireEvent.change(inputElement, {
    target: {
      value: "할 일",
    },
  });
  fireEvent.click(buttonElemennt);
  expect(result.current[0].length).toBe(1);
  expect(result.current[0][0].todo).toBe("할 일");
});
