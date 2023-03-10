import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook/hooks";

import "../../assets/styles/todosStyle.scss";
import { selectTodos } from "../../store/selectors/todoSelector";
import { addTodos, getTodos } from "../../store/thunkAction/todoThunkAction";
import TodoItem from "./TodoItem";

const Todos = () => {
  const dispatch = useAppDispatch();
  const [textinpt, settextinpt] = useState<string>("");

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const todos = useAppSelector(selectTodos);

  const handleOnchangInput = (event: ChangeEvent<HTMLInputElement>) => {
    settextinpt(event.target.value);
  };

  const handleAddTodo = () => {
    if (textinpt) {
      dispatch(addTodos(textinpt));
    }
    settextinpt("");
  };

  return (
    <div className="todos-container">
      <div className="todos-list-item fadeInDown">
        <div className="add-todo">
          <input
            type="text"
            placeholder="Add todo"
            value={textinpt}
            onChange={handleOnchangInput}
          />
          <span onClick={handleAddTodo}>ADD</span>
        </div>
        {todos.map((todo) => {
          return <TodoItem data={todo} key={todo.id} />;
        })}
      </div>
    </div>
  );
};

export default Todos;
