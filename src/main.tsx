import ReactDOM from "react-dom/client";
import React from "react";

import "./style.css";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
