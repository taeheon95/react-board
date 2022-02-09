import React from "react";
import TodoFormContainer from "./TodoFormContainer";

interface Todo {
  id: number;
  todo: string;
}

interface TodoFormProps {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoForm(props: TodoFormProps) {
  const { todoList, setTodoList } = props;
  return <TodoFormContainer todoList={todoList} setTodoList={setTodoList} />;
}

export default TodoForm;
