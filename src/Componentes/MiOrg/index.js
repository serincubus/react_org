import {useState} from "react"
import "./miOrg.css"

const MiOrg = (props)=>{
console.log(props);

    //const [nombre, actualizarNombre]=useState('harland')
    //const [mostrar, actualizarMostrar]=useState(true)
    //const manejarClick=()=>{
      //  console.log("mostrar/ocultar elemento", mostrar);
       // actualizarMostrar(!mostrar)
        
    //}

    return <section className="orgSection">
        <h3 className="title">Mi organizacion</h3>
        <img src="/img/boton_add.png" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg