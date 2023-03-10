import React, { FormEvent, useState } from "react";
import { useAppDispatch } from "../../app/hook/hooks";

import { Todo } from "../../store/slice/todoSlice";
import {
  editTodos,
  deleteTodos,
} from "../../store/thunkAction/todoThunkAction";

interface TodoItemprops {
  data: Todo;
}

const TodoItem = ({ data }: TodoItemprops) => {
  const { id, text, completed } = data;

  const dispatch = useAppDispatch();

  const [edit, seteditTodos] = useState<boolean>(false);
  const [textEdit, settextEdit] = useState<string>("");

  const handleEditTodo = () => {
    seteditTodos(true);
    settextEdit(text);
  };

  const handleOnchangeEdit = (event: FormEvent<HTMLSpanElement>) => {
    if (event.currentTarget.textContent) {
      settextEdit(event.currentTarget.textContent);
    }
  };

  const handleUpdateTodo = (todo: Todo) => {
    dispatch(editTodos(todo));
  };

  const handleClickChckBox = () => {
    handleUpdateTodo({
      id,
      text,
      completed: !completed,
    });
  };

  const handleOnblur = () => {
    handleUpdateTodo({
      id,
      text: textEdit,
      completed,
    });
    seteditTodos(false);
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodos(id));
  };

  return (
    <div className={completed ? "todos-item fadeIn done" : "todos-item fadeIn"}>
      <div className="todos-item-first">
        <input
          type="checkbox"
          defaultChecked={completed}
          onClick={handleClickChckBox}
        />
        <span
          className={edit ? "todos-text edit" : "todos-text"}
          contentEditable={edit ? true : false}
          onInput={handleOnchangeEdit}
          onBlur={handleOnblur}
        >
          {text}
        </span>
      </div>
      <div className="todos-item-last">
        <i className="fas fa-pen" onClick={handleEditTodo}></i>
        <i className="fas fa-trash-alt delete" onClick={handleDeleteTodo}></i>
      </div>
    </div>
  );
};

export default TodoItem;
