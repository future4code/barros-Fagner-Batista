import React from "react";

export default function CardPequeno(props){
    return(
        <div>
            <p>Estado: {props.estado}</p>
            <p>Cidade: {props.cidade}</p>
            <p>Bairro: {props.bairro}</p>
            <p>Rua: {props.rua}</p>
            <p>Numero: {props.numero}</p>
            <p>Email: {props.email}</p>
            <img id = "estrada" src ={props.imagem}/>


        </div>
    )
}