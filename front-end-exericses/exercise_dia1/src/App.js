import logo from './logo.svg';
import './App.css';

const task = (valueTask) => {
  return (
    <li>{valueTask}</li>
  )
}

const compromissos = ['Jantar ', 'Correr ', 'treinar ', 'Nadar '];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Coisas</h1>
        <p>{compromissos.map((arr) => arr )}</p>
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
