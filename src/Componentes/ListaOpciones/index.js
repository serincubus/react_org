import "./ListaOpciones.css"

const ListaOpciones = ()=>{
 const equipos = [
       "Programacion",
       "Front End",
       "Data Science",
       "Devops",
       "Ux y Diseño",
       "Movil",
       "Innovacion y gestión"
 ]

    return <div className="lista-opciones">
               <label>Equipo</label> 
               <select>
                    {equipos.map(()=>{
                        return <option>Equipo</option>
                    })}                   
               </select>
           </div>

}

export default ListaOpciones;


