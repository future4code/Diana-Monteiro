import React from 'react';
import './ImagemButton.css'

function ImagemButton(props) {
    return (
        <div className="image-button-container">
            <a href={ props.link } target="_blank">
            <img src={ props.imagem }/></a>
            <h4>{ props.texto }</h4>
        </div>
    )
}

export default ImagemButton;