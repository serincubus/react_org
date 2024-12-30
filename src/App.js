import {useState} from "react"

import './App.css';
import Header from './Componentes/Header/Header.js';
import Formulario from './Componentes/Formulario/Formulario.js'
import MiOrg from "./Componentes/MiOrg"

function App() {

  const [mostrarFormulario, actualizarMostrar]=useState(true);

   //TERNARIO --> CONDICION ? SE MUESTRA : NO SE MUESTRA

   const cambiarMostrar=()=>{
    actualizarMostrar(!mostrarFormulario)
   }
  return (
    <div className="App">
      <Header />
      {mostrarFormulario === true ? <Formulario /> : <div></ div>}
      <MiOrg cambiarMostrar={cambiarMostrar} />
             
    </div>
  );
}

export default App;
