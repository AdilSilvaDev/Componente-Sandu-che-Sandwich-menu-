import './ExemploBotao.css'; // Importa os estilos CSS associados ao componente de botão

const ExemploBotao = (props) => {
    // Retorna o JSX que representa o componente de botão
    return (
        <div>
            {/* Renderiza o botão com as classes CSS dinâmicas com base nas propriedades recebidas */}
            <button className={props.tipo + " " + props.size}>{props.nome}</button>
        </div>
    );
}

export default ExemploBotao; // Exporta o componente de botão para uso em outros lugares do aplicativo
