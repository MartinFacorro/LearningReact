import React from "react";
import ReactDOM from "react-dom/client"; //HERRAMIENTA PARA RENDERIZAR

import {App} from './HelloWorldApp'

//RENDERIZARLA EN EL DOM
ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);