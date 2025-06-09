import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Cambia esta líneaimport App from "./App";
import "./styles/index.css";
import App from "./App";
console.log("App uju component is rendering"); // Agrega esta línea
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter> {/* Cambia esta línea */}
      <App />
    </HashRouter>
  </React.StrictMode>
);