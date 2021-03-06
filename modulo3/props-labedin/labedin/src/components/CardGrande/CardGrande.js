import React from 'react';
import './CardGrande.css'

function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
                <p id = "defeitos">{props.descricaoDefeitos}</p>
            </div>
        </div>
    )
}

export default CardGrande;