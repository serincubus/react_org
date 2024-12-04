import logo from './logo.svg';
import './App.css';
import Header from './Componentes/Header/Header.js';
import Formulario from './Componentes/Formulario/Formulario.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Formulario />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
