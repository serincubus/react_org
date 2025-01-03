import {useState} from "react"
import "./campoTexto.css"

function CampoTexto(props) {
    const [valor,actualizarValor]=useState("")
    console.log('datos:', props)
    const placeholderModificado = `${props.placeholder}...`
 
     const manejarCambio= (e)=>{
        console.log("cambio", e.target.value);
        props.actualizarValor(e.target.value)
        
     }   

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            />

    </div>
}


export default CampoTexto