import HeaderIcones from '../HeaderIcone/HeaderIcone'; // Importa o componente de ícones do cabeçalho
import Logo from '../Logo/Logo'; // Importa o componente de logotipo
import './Header.css'; // Importa os estilos CSS específicos para este componente de cabeçalho

const Header = () => {
    
    // Função para formatar a data e hora atuais
    function formataData(data) {
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        const ano = data.getFullYear().toString();
        const hora = data.getHours().toString().padStart(2, '0');
        const minuto = data.getMinutes().toString().padStart(2, '0');

        return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
    }

    // Retorna o JSX que representa o componente de cabeçalho
    return (
        <div className="head-container">
            <Logo /> {/* Renderiza o componente de logotipo */}
            <div>{formataData(new Date())}</div> {/* Renderiza a data formatada */}
            <HeaderIcones /> {/* Renderiza o componente de ícones do cabeçalho */}
        </div>
    );

}

export default Header; // Exporta o componente de cabeçalho para uso em outros lugares do aplicativo
