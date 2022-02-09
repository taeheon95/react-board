import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  useState,
} from "react";
import TodoFormPresenter from "./TodoFormPresenter";

interface Todo {
  id: number;
  todo: string;
}

interface ContainerProps {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoFormContainer(props: ContainerProps) {
  const { todoList, setTodoList } = props;
  const [todoInput, setTodoInput] = useState<string>("");
  const handleTodoInput = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setTodoInput(e.target.value);
    },
    []
  );

  const addTodo = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (_) => {
      setTodoList((todoList) => {
        return todoList.concat({ id: todoList.length, todo: todoInput });
      });
      setTodoInput("");
    },
    [todoInput]
  );

  return (
    <TodoFormPresenter
      todoInput={todoInput}
      handleTodoInput={handleTodoInput}
      addTodo={addTodo}
    />
  );
}

export default TodoFormContainer;
