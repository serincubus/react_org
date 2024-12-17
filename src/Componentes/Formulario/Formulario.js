import CampoTexto from "../CampoTexto/index"
import ListaOpciones from "../ListaOpciones";
import "./formulario.css";
import Boton from "../Boton"


function Formulario() {
    return <section className='formulario'>
                   <form >
                        <h2>Rellena el formulario para crear el colaborador</h2>
                        <CampoTexto titulo="nombre" placeholder="ingrese su nombre..."/>
                        <CampoTexto titulo="puesto" placeholder="ingrese su puesto"/>
                        <CampoTexto titulo="foto" placeholder="ingrese enlace de foto"/> 
                        <ListaOpciones titulo="Equipo" placeholder="ingrese el equipo"/> 
                        <Boton />
                   </form>
           </section>   
}

export default Formulario;