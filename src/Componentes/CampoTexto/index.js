import "./campoTexto.css"

function CampoTexto(props) {
    console.log('datos:', props)
    const placeholderModificado = `${props.placeholder}...`
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={placeholderModificado} />
    </div>
}


export default CampoTexto