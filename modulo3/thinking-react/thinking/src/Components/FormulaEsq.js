import React from "react";
import { Form1 } from "./Styled";
function Produto1() {
  return (

    <Form1>
    <div className="App">
 

    <form>
      <label>Valor Mínimo:  
        <input></input>
      </label>
    </form>

    <form>
      <label>Valor Máximo:  
        <input></input>
      </label>
    </form>

    <form>
      <label >Busca por nome:  
        <input placeholder="Produto"></input>
      </label>
    </form>

    </div>
    </Form1>
  );
}

export default Produto1;

