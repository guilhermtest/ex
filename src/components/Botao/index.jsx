import './style.css'

export default function Botao({ nome, idade, ...rest }) {
    return (
        <button className="botao-container" {...rest}>
            {nome} {idade}
        </button>
    )
}