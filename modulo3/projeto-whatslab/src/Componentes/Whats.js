
import React, { useState } from "react";
import { ItemLista, Formulario } from '../Styled';



const Whats=()=>{

    //alteração dos itens
    const [itens,setItens]=useState([
     
    ])        
    const itensNaLista=itens.map((item, index)=>{
        return(
            <ItemLista key={index}>
                 <div>
                     <p>{item.ItemLista}</p>
               
                     <button onClick={()=>remover(index)}>X</button>
                 </div>
            </ItemLista>
        )
    })

//aula lista 2
const [nome, setNome]=useState("")
const [mensagem, setMensagem]=useState("");


const mudaNome=(event)=>{
    setNome(event.target.value)
    console.log(nome);
}
const mudaMensagem=(event)=>{
    setMensagem(event.target.value)
    console.log();
    console.log(mensagem);
 }




const adiconar=(e)=>{
    e.preventDefault() 
    const itensAtualizados=[...itens,{nome:nome,mensagem:mensagem}]
    setItens(itensAtualizados)
    console.log("botão precionado!");
    setNome(setNome)
    setMensagem(setMensagem)
}
const remover=(indexRemover)=>{
    const itensAtualizados=itens.filter((item,index)=>{
        return index!==indexRemover;
    })
    setItens(itensAtualizados)    
}

 return(
        <div>
            <Formulario action=''>
                <input type='text' required placeholder='Nome' value={nome} onChange={mudaNome}></input>

       
                <input type='text'required placeholder='Mensagem' value={mensagem} onChange={mudaMensagem}></input>
               

                <button onClick={adiconar}>Enviar mensagem</button>
            </Formulario>
            <ul>
               {itensNaLista}
            </ul>
        </div>
    )
}

export default Whats


