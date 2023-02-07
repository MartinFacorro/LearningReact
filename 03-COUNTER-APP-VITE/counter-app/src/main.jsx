import React from "react";
import ReactDOM from "react-dom/client"; //HERRAMIENTA PARA RENDERIZAR

import { App } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";

import "./styles.css"; //ESTILO GLOBAL

//RENDERIZARLA EN EL DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <FirstApp title={123}/>
  </React.StrictMode>
);
