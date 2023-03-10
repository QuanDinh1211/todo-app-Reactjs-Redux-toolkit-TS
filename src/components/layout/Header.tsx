import React from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook/hooks";

import "../../assets/styles/headerStyle.scss";
import { selectAuthState } from "../../store/selectors/authSelector";
import { logout } from "../../store/slice/authSlice";

const Header = () => {
  const dispatch = useAppDispatch();

  const authState = useAppSelector(selectAuthState);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="header-container fadeInDown">
      <div className="header-first fadeIn">
        <NavLink
          to="/"
          className={({ isActive }) =>
            "header-item" + (isActive ? " active" : "")
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/todos"
          className={({ isActive }) =>
            "header-item" + (isActive ? " active" : "")
          }
        >
          Todos
        </NavLink>
      </div>
      <div className="header-last fadeIn">
        <div className="header-username">
          <span>Hello {authState.user && authState.user.username}</span>
        </div>
        <div className="header-logout">
          <i className="fas fa-sign-out" onClick={handleLogout}></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
