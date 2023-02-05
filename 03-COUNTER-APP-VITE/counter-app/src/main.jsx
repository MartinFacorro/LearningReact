import React from "react";
import ReactDOM from "react-dom/client"; //HERRAMIENTA PARA RENDERIZAR

import {App} from './HelloWorldApp'
import {FirstApp} from './FirstApp';


//RENDERIZARLA EN EL DOM
ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    <App />
    <FirstApp />
  </React.StrictMode>
);