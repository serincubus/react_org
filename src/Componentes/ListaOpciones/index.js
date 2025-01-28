import "./ListaOpciones.css"

const ListaOpciones = (props)=>{
 /*const equipos = [
       "Programacion",
       "Front End",
       "Data Science",
       "Devops",
       "Ux y Diseño",
       "Movil",
       "Innovacion y gestión"
 ]*/

 const manejarCambio=(e)=>{
    console.log("cambio",e.target.value);
   props.actualizarEquipo(e.target.value)
 }

    return <div className="lista-opciones">
               <label>Equipo</label> 
               <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden > seleccionar equipo</option>
                    {props.equipos.map((equipo,index)=>{
                        return <option key={index}>{equipo}</option>
                    })}                   
               </select>
           </div>

}

export default ListaOpciones;


