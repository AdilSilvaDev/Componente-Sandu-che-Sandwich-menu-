// Declaração da função reportWebVitals que recebe uma função de retorno de chamada como argumento
const reportWebVitals = onPerfEntry => {
  // Verifica se a função de retorno de chamada é válida
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Importa dinamicamente o módulo 'web-vitals' quando necessário
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Chama as funções de medição de desempenho e passa a função de retorno de chamada para elas
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Exporta a função reportWebVitals como um módulo padrão
export default reportWebVitals;

