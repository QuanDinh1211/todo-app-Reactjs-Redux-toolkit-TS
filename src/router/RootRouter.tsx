import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useAppSelector } from "../app/hook/hooks";
import Home from "../pages";
import Welcome from "../pages/Home";
import Login from "../pages/Login";
import TodoPage from "../pages/Todo";
import { selectAuthState } from "../store/selectors/authSelector";

const RootRouter = () => {
  const authState = useAppSelector(selectAuthState);

  const { isAuthenticated } = authState;
  let body;
  if (isAuthenticated) {
    return (body = (
      <Routes>
        <Route path="/login" element={<Navigate replace to="/" />} />
        <Route path="/" element={<Home />}>
          <Route path="todos" element={<TodoPage />} />
          <Route index element={<Welcome />} />
        </Route>
      </Routes>
    ));
  } else {
    body = (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    );
  }

  return <>{body}</>;
};

export default RootRouter;
