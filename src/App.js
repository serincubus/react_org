import logo from './logo.svg';
import './App.css';
import Header from './Componentes/Header/Header.js';
import Formulario from './Componentes/Formulario/Formulario.js'
import MiOrg from "./Componentes/MiOrg"

function App() {

  const [mostrarFormulario, actualizarMostrar]=useState(true);
  return (
    <div className="App">
      <Header />
      {mostrarFormulario === true ? <Formulario /> : <div></ div>}
      <MiOrg />
             
    </div>
  );
}

export default App;
