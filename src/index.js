import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"; // components folder inside src
import "./styles/App.css";          // styles folder inside src

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // must match the div id in index.html
);
