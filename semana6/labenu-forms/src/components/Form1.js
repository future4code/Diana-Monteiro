import React from "react";
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta"
import PerguntaOpcoes from "./PerguntaOpcoes"

const DivForm1 = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align:center;
`

class Form1 extends React.Component {
render(){
    return(
    <DivForm1>
        <h1>{"ETAPA1 - DADOS GERAIS"}</h1>
        <PerguntaAberta pergunta={"1. Qual o seu nome?"}/>
        <PerguntaAberta pergunta={"2. Qual o sua idade?"}/>
        <PerguntaAberta pergunta={"3. Qual o seu email?"}/>
        <PerguntaOpcoes 
        pergunta={"4. Qual a sua escolaridade?"}
        opcoes={[
            "Ensino médio completo",
            "Ensino médio imcompleto",
            "Ensino superior completo",
            "Ensino superior imcompleto"
        ]}
        valorOption={[
            "medio-com",
            "medio-im",
            "sup-com",
            "sup-im"
        ]}
        />
    </DivForm1>
    );
}
}

export default Form1;
