import React from "react";
import ReactDOM from "react-dom/client"; //HERRAMIENTA PARA RENDERIZAR

function App() { // FUNCTION COMPONENT O COMPONENTE INICIAL
  return (<h1>Hola mundo!</h1>);
}

//RENDERIZARLA EN EL DOM
ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);