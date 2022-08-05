import React from "react";
import Header from "./Banco/RevisaoReactBasico/Componentes/Header/Header";
import Card from "./Banco/RevisaoReactBasico/Componentes/Card/Card";
import { Homepage } from "./Banco/RevisaoReactBasico/Componentes/HomePage/HomePage";
import Detailspage from "./Banco/RevisaoReactBasico/Componentes/Detailspage/Detailspage";
import { GlobalStyle } from "./GlobalStyle";



function App(){

    return(
        <div className="Corpo">
         
         <div></div>
      <GlobalStyle/>
        <Homepage/>


        </div>
    )
}

export default App