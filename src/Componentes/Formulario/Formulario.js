import CampoTexto from "../CampoTexto/index"
import ListaOpciones from "../ListaOpciones";
import "./formulario.css";
import Boton from "../Boton"


function Formulario() {

    const manejarEnvio =(e)=>{
         e.preventDefault()
       console.log('manejar evento',e)

    }

    return <section className='formulario'>
                   <form onSubmit={manejarEnvio}>
                        <h2>Rellena el formulario para crear el colaborador</h2>
                        <CampoTexto titulo="nombre" placeholder="ingrese su nombre..." required/>
                        <CampoTexto titulo="puesto" placeholder="ingrese su puesto"required/>
                        <CampoTexto titulo="foto" placeholder="ingrese enlace de foto" required/> 
                        <ListaOpciones titulo="Equipo" placeholder="ingrese el equipo"/> 
                        <Boton texto="Crear"/>
                   </form>
           </section>   
}

export default Formulario;