import logo from './logo.svg';
import './App.css';
import ComponentFunction from './ComponentFunction';
import Sobrenome from './Sobrenome';
import ComponentClass from './ComponentClass';
import Contador from './Contador';
import TrocaTexto from './TrocaTexto';

/*
function App ()  {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <ComponentClass></ComponentClass>
        <br>
        </br>
        <ComponentFunction></ComponentFunction>
      </header>
    </div>
  );
};

*/

function App(){
  return(
    <TrocaTexto />
  );
};

export default App;
