import React, { useState } from "react";
import Final from "./Components/Final";
import Pagina1 from "./Components/Pagina1";
import Pagina2 from "./Components/Pagina2";
import Pagina3 from "./Components/Pagina3";


function App() {

  const [pagina, setPagina] = useState(1)
  let proximo;


    switch (pagina) {
      case 1:
        proximo = <Pagina1></Pagina1>
        
      case 2:
        proximo = <Pagina2></Pagina2>
        
      case 3:
        proximo = <Pagina3></Pagina3>
        
      case 4:
        default:  
           <Final></Final>
    }

      function proximaPagina(){
        let soma = 1
        soma = soma + 1
         setPagina(pagina);
      }
   

  return (
    <div className="App">
     {proximo}  
     
     
      <button onClick={proximaPagina}>Próxima Pagina</button>
     
    </div>
  );
}

export default App
