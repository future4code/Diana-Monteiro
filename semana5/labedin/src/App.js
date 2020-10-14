import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://i.ibb.co/xsQyXfc/didi.jpg"
          nome="Diana Monteiro"
          descricao="Oi, eu sou o Diana Monteiro. Aluna da Labenu. Nem sempre sou tão confiante como quero parecer, diariamente me pergunto porque fui abraçar uma dívida de 24mil reais, logo eu taurina mão de vaca. Tudo por meu filho, diz a voz interior. Dá uma chance pra essa mãe solo que não foge a luta e confira minhas andanças profissionais!"
        />

        <div className="button-vermais">
        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
        </div>

        <CardPequeno
          imagem="https://www.flaticon.com/svg/static/icons/svg/95/95645.svg"
          titulo="Email:"
          descricao="diana.dev@labenumearrumaumjob.com"
        />
        <CardPequeno
          imagem="https://www.flaticon.com/svg/static/icons/svg/1239/1239525.svg"
          titulo="Endereço:"
          descricao="Rua São Francisco Xavier"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://i.ibb.co/X7mnSpb/liessin.png"
          nome="Colégio Liessin"
          descricao="Professora responsável por todas as atividades do Laboratório de Ciências  referentes às turmas do Ensino Fundamental. Orientação dos alunos e acompanhamento das aulas."
        />

        <CardGrande
          imagem="https://santaceciliaresiduos.com.br/site/wp-content/uploads/2019/07/credenciamento-inea.png"
          nome="Instituto Estadual do Meio Ambiente"
          descricao="Estagiária na Coordenadoria de Gestão do território e informações Geoespaciais – Diretoria de Biodiversidade e Áreas protegidas."
        />
      </div>

      <div className="page-section-container">
        <h2>Formações Acadêmicas</h2>
        <CardGrande
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Logo-ence.svg/1200px-Logo-ence.svg.png"
          nome="Escola Nacional de Ciências Estatísticas"
          descricao="Pós-Graduação em Análise Ambiental e Gestão do Território."
        />

        <CardGrande
          imagem="https://logodownload.org/wp-content/uploads/2015/02/ufrj-logo-14.png"
          nome="Universidade Federal do Rio de Janeiro"
          descricao="Bacharel e Licenciatura em Ciências Biológicas."
        />
      </div>

      <div className="page-section-container">
        <h2>Idiomas</h2>
        <CardPequeno
          imagem="https://www.flaticon.com/svg/static/icons/svg/330/330459.svg"
          titulo="Inglês:"
          descricao="Avançado"
        />
        <CardPequeno
          imagem="https://www.flaticon.com/svg/static/icons/svg/330/330557.svg"
          titulo="Espanhol:"
          descricao="Intermediário"
        />
      </div>

      <div className="page-section-container">
        <h2>Hard Skills</h2>
        <div className="section-skills">
          <Skills
            imagem="https://www.flaticon.com/svg/static/icons/svg/2111/2111423.svg"
            texto="GIT"
            pontos="&#9670; &#9670; &#9671; &#9671; &#9671;"
          />
          <Skills
            imagem="https://www.flaticon.com/svg/static/icons/svg/1199/1199113.svg"
            texto="CSS"
            pontos=" &#9670; &#9670; &#9670; &#9670; &#9671;"
          />
          <Skills
            imagem="https://www.flaticon.com/svg/static/icons/svg/2807/2807781.svg"
            texto="PHP"
            pontos="&#9670; &#9670; &#9671; &#9671; &#9671;"
          />
          <Skills
            imagem="https://www.flaticon.com/svg/static/icons/svg/1199/1199118.svg"
            texto="HTML"
            pontos="&#9670; &#9670; &#9670; &#9670; &#9671;"
          />
          <Skills
            imagem="https://www.flaticon.com/svg/static/icons/svg/1199/1199128.svg"
            texto="MySQL"
            pontos="&#9670; &#9670; &#9671; &#9671; &#9671;"
          />
          <Skills
            imagem="https://www.flaticon.com/svg/static/icons/svg/1199/1199124.svg"
            texto="JavaScript"
            pontos="&#9670; &#9670; &#9670; &#9671; &#9671;"
          />
        </div>
      </div>

      <div className="page-section-container">
        <h2>Soft Skills</h2>
        <div className="section-skills">
          <Skills
            imagem="https://www.flaticon.com/svg/static/icons/svg/1706/1706018.svg"
            texto=" Empatia"
            pontos="&#9670; &#9670; &#9670; &#9670; &#9671;"
          />
          <Skills
            imagem="https://www.flaticon.com/svg/static/icons/svg/649/649650.svg"
            texto="Resiliência"
            pontos="&#9670; &#9670; &#9670; &#9670; &#9670;"
          />
          <Skills
            imagem="https://www.flaticon.com/svg/static/icons/svg/649/649624.svg"
            texto="Criatividade"
            pontos="&#9670; &#9670; &#9670; &#9670; &#9671;"
          />
          <Skills
            imagem="https://www.flaticon.com/svg/static/icons/svg/2405/2405303.svg"
            texto="Comunicação"
            pontos="&#9670; &#9670; &#9670; &#9670; &#9671;"
          />
          <Skills
            imagem="https://www.flaticon.com/svg/static/icons/svg/3314/3314664.svg"
            texto="Trabalhar em Grupo"
            pontos=" &#9670; &#9670; &#9670; &#9670; &#9671;"
          />
          <Skills
            imagem="https://www.flaticon.com/svg/static/icons/svg/1530/1530449.svg"
            texto="Conciência Ecológica"
            pontos="&#9670; &#9670; &#9670; &#9670; &#9670;"
          />
          <Skills
            imagem="https://www.flaticon.com/svg/static/icons/svg/3603/3603901.svg"
            texto="Inteligência Emocional"
            pontos="&#9670; &#9670; &#9670; &#9670; &#9671;"
          />
        </div>

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <div className="page-section-social-medias">
          <ImagemButton
            imagem="https://www.flaticon.com/svg/static/icons/svg/1409/1409945.svg"
            texto="Linkedin"
            link="https://www.linkedin.com/in/diana-monteiro-b8565510b/"
          />
          <ImagemButton
            imagem="https://www.flaticon.com/svg/static/icons/svg/1409/1409943.svg"
            texto="Facebook"
            link="https://www.facebook.com/didiamonteiro/"
          />
          <ImagemButton
            imagem="https://www.flaticon.com/svg/static/icons/svg/1409/1409946.svg"
            texto="Instagram"
            link="https://www.instagram.com/didiamonteiro/"
          />
          <ImagemButton
            imagem="https://www.flaticon.com/svg/static/icons/svg/25/25657.svg"
            texto="GitHub"
            link="https://github.com/DiaMont30"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
