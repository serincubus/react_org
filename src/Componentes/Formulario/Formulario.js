import CampoTexto from "../CampoTexto/index"
import "./formulario.css"

function Formulario() {
    return <section className='formulario'>
                   <form >
                        <h2>Rellena el formulario para crear el colaborador</h2>
                        <CampoTexto />
                        <CampoTexto />
                        <CampoTexto />
                   </form>
           </section>   
}

export default Formulario;