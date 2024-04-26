import React from 'react'; // Importa o React para a construção de interfaces
import ReactDOM from 'react-dom/client'; // Importa o ReactDOM para renderização no navegador
import './index.css'; // Importa os estilos CSS globais
import App from './App'; // Importa o componente principal do aplicativo
import reportWebVitals from './reportWebVitals'; // Importa a função para relatar métricas de desempenho

// Cria um root para renderização assíncrona
const root = ReactDOM.createRoot(document.getElementById('root'));
// Renderiza o componente principal do aplicativo dentro de um modo estrito de renderização
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Se desejar medir o desempenho do seu aplicativo, você pode passar uma função
// para registrar os resultados (por exemplo: reportWebVitals(console.log))
// ou enviar para um endpoint de análise. Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals();

