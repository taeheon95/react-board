import React from "react";
import { Form } from "react-bootstrap";
import queryHoc from "../../hoc/queryHoc";

interface TodoListProps {
  queryResult?: Todo[];
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function TodoList(props: TodoListProps) {
  return (
    <div>
      {props.queryResult?.map((todo) => {
        return (
          <div key={todo.id}>
            <Form.Check
              type="checkbox"
              defaultChecked={todo.completed}
              label={todo.title}
            />
          </div>
        );
      })}
    </div>
  );
}

export default queryHoc<Todo[]>(
  TodoList,
  "Todos",
  "https://jsonplaceholder.typicode.com/todos"
);
