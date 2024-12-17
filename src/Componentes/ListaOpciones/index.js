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
                    {equipos.map((equipo,index)=>{
                        return <option key={index}>{equipo}</option>
                    })}                   
               </select>
           </div>

}

export default ListaOpciones;


