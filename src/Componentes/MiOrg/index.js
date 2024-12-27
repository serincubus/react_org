import {useState} from "react"
import "./miOrg.css"

const MiOrg = ()=>{

    const [nombre, actualizarNombre]=useState('harland')
    const [mostrar, actualizarMostrar]=useState(true)
    const manejarClick=()=>{
        console.log("mostrar/ocultar elemento", mostrar);
        actualizarMostrar(!mostrar)
        
    }

    return <section className="orgSection">
        <h3 className="title">Mi organizacion {nombre}</h3>
        <img src="/img/boton_add.png" onClick={manejarClick}/>
    </section>
}

export default MiOrg