import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [inCompleteTodos, setInCompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (!todoText) return;
    const newTodos = [...inCompleteTodos, todoText];
    setInCompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (i) => {
    const newTodos = [...inCompleteTodos];
    newTodos.splice(i, 1);
    setInCompleteTodos(newTodos);
  };

  const onClickComplete = (i) => {
    const newInCompleteTodos = [...inCompleteTodos];
    newInCompleteTodos.splice(i, 1);
    setInCompleteTodos(newInCompleteTodos);

    const newCompleteTodos = [...completeTodos, inCompleteTodos[i]];
    setCompleteTodos(newCompleteTodos);
  };

  const onClickInComplete = (i) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(i, 1);
    setCompleteTodos(newCompleteTodos);

    const newInCompleteTodos = [...inCompleteTodos, completeTodos[i]];
    setInCompleteTodos(newInCompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        inCompleteTodos={inCompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos
        completeTodos={completeTodos}
        onClickInComplete={onClickInComplete}
      />
    </>
  );
};
