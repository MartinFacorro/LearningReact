//Forma 1 Para que haya un elemento padre
/*export function FirstApp() {
  return (
    <div>
      <h2>This is the FirstApp Component</h2>
      <h3>Pruebas de otro elemento</h3>
    </div>
  );
}

// Forma dos, se importa el elemento fragment

export function FirstApp() {
  return (
    <fragmemt>
      <h2>This is the FirstApp Component</h2>
      <h3>Pruebas de otro elemento</h3>
    </fragmemt>
  );
}*/


export function FirstApp() {
  return (
    <> // SINONIMO DE FRAGMENTO
      <h2>This is the FirstApp Component</h2>
      <h3>Pruebas de otro elemento</h3>
    </>
  );
}