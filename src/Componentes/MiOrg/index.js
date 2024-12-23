import "./miOrg.css"

const MiOrg = ()=>{

    const manejarClick=()=>{
        console.log("mostrar/ocultar elemento");
        
    }

    return <section className="orgSection">
        <h3 className="title">Mi organizacion</h3>
        <img src="/img/boton_add.png" onClick={manejarClick}/>
    </section>
}

export default MiOrg