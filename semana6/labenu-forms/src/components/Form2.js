import React from 'react';
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta"

const DivForm2 = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align:center;
`

class Form2 extends React.Component {
    state = {
        curso: "",
        unidadeDeEnsino: ""
    }
    
    render(){
        return(
        <DivForm2>
            <h1>{"ETAPA2 - INFORMAÇÕES DO ENSINO SUPERIOR"}</h1>
            <PerguntaAberta pergunta={"5. Qual curso?"}/>
            <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"}/>
        </DivForm2>
        );
    }
    }

export default Form2;
    