
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