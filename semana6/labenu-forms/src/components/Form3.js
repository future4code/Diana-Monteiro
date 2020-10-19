import React from 'react';
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta"
import PerguntaOpcoes from "./PerguntaOpcoes"

const DivForm3 = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align:center;
`

class Form3 extends React.Component {
state = {
    motivoDeInterrupcao: "",
    cursoComplementar: ""
}

render(){
    return(
    <DivForm3>
        <h1>{"ETAPA3 - DADOS GERAIS"}</h1>
        <PerguntaAberta pergunta={"7. Por que você não terminou um curso de graduação?"}/>

        <PerguntaOpcoes 
        pergunta={"8. Você fez algum curso complementar?"}
        opcoes={[
            "Nenhum",
            "Curso Técnico",
            "Curso de Inglês",
        ]}
        />

    </DivForm3>
    );
}
}

export default Form3;