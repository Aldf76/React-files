import logo from './logo.svg';
import './App.css';
import Pai2 from './deverDeCasa04/Desafio 2/Pai2'

function App() {
  return (
  <div className='App'>
    <header className="App-header">
      <img src={logo} className="App-logo" alt='logo'/>

      <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      <h1>Lista de Tarefas com sincronização</h1>      
      <Pai2/>
    

    </header>
    
  </div>
  )
}


export default App;
