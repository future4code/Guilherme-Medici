import React from 'react';
import './CardGrande.css'
import fotoPerfil from '../Imagem/foto.jpg'

function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <img src={ fotoPerfil } alt="foto do perfil" />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardGrande;