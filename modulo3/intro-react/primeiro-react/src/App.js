import foto from './foto3.jpg';
import './App.css';

function App() {
  const nome = "Olá! Sou o Fagner!"
  function mensagem(){
    alert("Boa Noite")
  }
  return (
    <div className="App">
      <h3>{nome}</h3>
      <header className="App-header">
        <img src={foto} alt="logo" />
       
        <h2>Este é meu primeiro react</h2>
        <button onClick={mensagem}>Aperte este botão</button>
      
      </header>
    </div>
  );
}

export default App;
