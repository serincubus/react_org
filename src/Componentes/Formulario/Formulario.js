import {useState} from "react"
import CampoTexto from "../CampoTexto/index"
import ListaOpciones from "../ListaOpciones";
import "./formulario.css";
import Boton from "../Boton"


function Formulario(props) {

      const [nombre, actualizarNombre]=useState("");
      const [puesto, actualizarPuesto]=useState("");
      const [foto, actualizarFoto]=useState("");
      const [equipo, actualizarEquipo]=useState("");

      const {registrarColaborador}= props
      

    const manejarEnvio =(e)=>{
         e.preventDefault()
       console.log('manejar el envio')
       let datosAEnviar= {
            nombre,
            puesto,
            foto,
            equipo
       }
       registrarColaborador(datosAEnviar)

    }

    return <section className='formulario'>
                   <form onSubmit={manejarEnvio}>
                        <h2>Rellena el formulario para crear el colaborador</h2>
                        <CampoTexto 
                              titulo="nombre" 
                              placeholder="ingrese su nombre..." 
                              valor={nombre}
                              actualizarValor={actualizarNombre}
                              required
                         />
                        <CampoTexto 
                              titulo="puesto" 
                              placeholder="ingrese su puesto"
                              valor={puesto}
                              actualizarValor={actualizarPuesto}
                              required
                        />
                        <CampoTexto 
                              titulo="foto" 
                              placeholder="ingrese enlace de foto" 
                              valor={foto}
                              actualizarValor={actualizarFoto}
                              required
                         /> 
                        <ListaOpciones 
                              valor={equipo} 
                              actualizarEquipo={actualizarEquipo}
                              equipos={props.equipos}
                         /> 
                        <Boton texto="Crear"/>
                   </form>
           </section>   
}

export default Formulario;