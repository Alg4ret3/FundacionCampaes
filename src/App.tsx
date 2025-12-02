
import HomePage from './pages/HomePage';

function App() {
  // En aplicaciones más grandes, aquí irían los Routers (ej. React Router)
  // Pero por ahora, simplemente montamos la página principal.
  return (
    <div className="AppRoot">
      <HomePage />
    </div>
  );
}

export default App;

/*
  Archivo principal de la aplicación (`App.tsx`).

  Este archivo importa la página principal `HomePage` y la renderiza dentro 
  de un contenedor raíz (`div` con clase `AppRoot`).

  Estructura:
    <div className="AppRoot">
      <HomePage />  // Página principal que contiene toda la estructura y secciones
    </div>
*/
