import React from "react";
import "./assets/styles/reset.css";
import "./assets/styles/global.scss";
import "./assets//styles/keyFrames.css";

import RootRouter from "./router/RootRouter";

function App() {
  return (
    <div className="app-wrapper relative">
      <RootRouter />
    </div>
  );
}

export default App;
