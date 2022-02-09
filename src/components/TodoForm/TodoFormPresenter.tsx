import React, { ChangeEventHandler, MouseEventHandler } from "react";
import { Button, Form } from "react-bootstrap";

interface TodoFormProps {
  todoInput: string;
  handleTodoInput: ChangeEventHandler<HTMLInputElement>;
  addTodo: MouseEventHandler<HTMLButtonElement>;
}

function TodoFormPresenter(props: TodoFormProps) {
  const { todoInput, handleTodoInput, addTodo } = props;
  return (
    <div>
      <Button onClick={addTodo}>+</Button>
      <Form.Control
        placeholder="할 일을 입력하세요."
        value={todoInput}
        onChange={handleTodoInput}
      />
    </div>
  );
}

export default TodoFormPresenter;
