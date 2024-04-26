import medico from './medico.svg'; // Importa o ícone do médico
import paciente from './paciente.svg'; // Importa o ícone do paciente

const HeaderIcones = () => {
  
// Retorna o JSX que representa o componente de ícones do cabeçalho

    return (
        <div>
            <img src={medico} alt="medico"></img>
            <img src={paciente} alt="paciente"></img>
        </div>
      /* Renderiza o ícone do médico */
      /* Renderiza o ícone do paciente */
    );

}

export default HeaderIcones; // Exporta o componente de ícones do cabeçalho para uso em outros lugares do aplicativo