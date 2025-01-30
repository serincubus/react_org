import {useState} from "react"

import './App.css';
import Header from './Componentes/Header/Header.js';
import Formulario from './Componentes/Formulario/Formulario.js'
import MiOrg from "./Componentes/MiOrg"
import Equipo from "./Componentes/Equipo/index.js";
import Footer from "./Componentes/Footer/index.js";

function App() {

  const [mostrarFormulario, actualizarMostrar]=useState(false);
  const [colaboradores, actualizarColaboradores]=useState([
    
    {
      nombre:"cristian velasco",
      foto:"https://github.com/christianpva.png",
      puesto:"instructor",
      equipo:"Programacion"
    },
    {
      nombre:"Genesys Rondon",
      foto:"https://github.com/genesysaluralatam.png",
      puesto:"instructor",
      equipo:"Programacion"
    },
    {
      nombre:"Jean Marie",
      foto:"https://github.com/JeanmarieAluraLatam.png",
      puesto:"instructor",
      equipo:"Ux y Diseño"
    },
    {
      nombre:"harland lohora",
      foto:"https://github.com/harlandlohora.png",
      puesto:"instructor",
      equipo:"Front End"
    },
    
    
  ])

  const[ equipos, actualizarEquipos]=useState([
    {
      titulo:"Programacion",
      colorPrimario:"#57c278",
      colorSecundario:"#d9f7e9"
    },
    {
      titulo:"Front End",
      colorPrimario:"#82cffa",
      colorSecundario:"#e8f8ff"
    },
    {
      titulo:"Data Science",
      colorPrimario:"#a6d157",
      colorSecundario:"#f0f8e2",
    },
    {
      titulo:"Devops",
      colorPrimario:"#e06b69",
      colorSecundario:"#fde7e8",
    },
    {
      titulo:"Ux y Diseño",
      colorPrimario:"#db6ebf",
      colorSecundario:"#fae9f5",
    },
    {
      titulo:"Movil",
      colorPrimario:"#ffba05",
      colorSecundario:"#fff5d9",
    },
    {
      titulo:"Innovacion y gestión",
      colorPrimario:"ff8a29",
      colorSecundario:"#ffeedf",
    }

  ])

   //TERNARIO --> CONDICION ? SE MUESTRA : NO SE MUESTRA

   const cambiarMostrar=()=>{
    actualizarMostrar(!mostrarFormulario)
   }

   const registrarColaborador= (colaborador)=>{
        console.log("nuevo colaborador", colaborador);

       //spreed operator
     actualizarColaboradores([...colaboradores, colaborador])
    }

   const eliminarColaborador=(nombreColaborador)=>{
    const colaboradoresActualizados=colaboradores.filter((colaborador)=>colaborador.nombre!==nombreColaborador)
    console.log("eliminar colaborador");

    actualizarColaboradores(colaboradoresActualizados)
    
   }

    
   

   const actualizarColor=(color,titulo)=>{
           console.log("actualizar:", color, titulo);
        const equiposActualizados = equipos.map((equipo)=>{
          if(equipos.titulo===titulo){
            equipo.colorPrimario = color
          }
          return equipo
        })  
        actualizarEquipos(equiposActualizados)
   }

   


  return (
    <div className="App">
      <Header />
      {mostrarFormulario === true ? <Formulario 
          equipos={equipos.map((equipo)=>equipo.titulo)}
          registrarColaborador={registrarColaborador}
          /> : <div></ div>}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador=>colaborador.equipo===equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          />)
      }
      <Footer />
             
    </div>
  );
}

export default App;
