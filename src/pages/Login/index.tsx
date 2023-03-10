import React, { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../app/hook/hooks";

import "../../assets/styles/loginStyle.scss";
import { login } from "../../store/thunkAction/authThunkAction";

interface Form {
  username: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const [dataFrom, setdataFrom] = useState<Form>({
    username: "",
    password: "",
  });

  const handleOnchangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setdataFrom({ ...dataFrom, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = () => {
    dispatch(login(dataFrom));
  };

  return (
    <div className="login-container ">
      <div className="login-from fadeInDown">
        <div className="login-title fadeIn">
          <span>Login</span>
        </div>
        <div className="login-content fadeIn">
          <div className="login-control">
            <input
              type="text"
              placeholder="Username"
              onChange={handleOnchangeInput}
              value={dataFrom.username}
              name="username"
            />
          </div>
          <div className="login-control">
            <input
              type="password"
              placeholder="Password"
              onChange={handleOnchangeInput}
              value={dataFrom.password}
              name="password"
            />
          </div>
          <div className="login-control btn">
            <span className="login-btn" onClick={handleSubmitForm}>
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
