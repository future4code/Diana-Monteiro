import React from 'react';
import './Skills.css'

function Skills(props) {
    return (
        <div className="image-skills-container">
            <img src={ props.imagem }/>
            <h4>{ props.texto }</h4>
            <p>{ props.pontos }</p>
        </div>

    )
}

export default Skills;