import React from "react";
import styled from "styled-components";
import TodoItem from "./item/TodoItem";
import { Itodo } from "../../TodoService";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

interface TodoListProps {
  todos: Itodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}



const TodoList = ({ toggleTodo, removeTodo, todos }: TodoListProps) => {
  const sort = (todos: Itodo[]) => {
    let doneTodos = todos.filter(todo => todo.done)
    let newTodos = todos.filter(todo => !todo.done).concat(...doneTodos)
    return newTodos
  }  
  
  return (
    <TodoListBlock>
      {todos &&
        sort(todos).map((todo) => (
          <TodoItem
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            key={todo.id}
            todo={todo}
          />
        ))}
    </TodoListBlock>
  );
};

export default React.memo(TodoList);
