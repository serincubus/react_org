import "./campoTexto.css"

function CampoTexto(datosExternos) {
    console.log('datos:', datosExternos)
    return <div className="campo-texto">
        <label>Nombre</label>
        <input placeholder= "Ingrese el nombre" />
    </div>
}


export default CampoTexto