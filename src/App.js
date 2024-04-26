import './App.css'; // Importa os estilos CSS globais do aplicativo
import Barras from './Components/Barras/Barras'; // Importa o componente de barras

function App() {
  // Retorna o JSX que representa o componente principal do aplicativo
  return (
    <div className="App">
      {/* Renderiza o componente de barras */}
      <Barras></Barras>
    </div>
  );
}

export default App; // Exporta o componente principal do aplicativo para uso em outros lugares
