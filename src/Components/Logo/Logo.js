import logoMarca from './Logo.svg'; // Importa o logotipo
import './Logo.css'; // Importa os estilos CSS associados ao componente de logotipo

const Logo = () => {
    // Retorna o JSX que representa o componente de logotipo
    return (
        <div className='container-logo'>
            {/* Renderiza o logotipo */}
            <img src={logoMarca} alt="logo-marca"></img>
            {/* Renderiza o texto do logotipo */}
            <span>Medical - group</span>
        </div>
    );
}

export default Logo; // Exporta o componente de logotipo para uso em outros lugares do aplicativo