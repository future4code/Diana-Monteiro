import React from "react";
import "./App.css";
import logo from "./youtube.png";
import menu from "./hamburguer.png"
import imgcopia from "./imgcopia.png"

function App() {
  const titulo = "Titulo do video"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <body>
      <div className="tela-inteira">
        <header>
        <img className="menu-hamburguer" src={menu} />
          <img className="logo" src={logo} />
          <h1>LabTube<sup>BR</sup></h1>
          <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
          <img className="img-busca" src="http://antigo.economia.gov.br/Economia/agendas/imagens/6945bbe2bb8c06e45f114c9bfcbe0bcd.png/@@images/image.png" />
          <img className="menu-img-copia" src={imgcopia} />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical"><img className="icones-menu" src="https://upload.wikimedia.org/wikipedia/commons/3/30/Home_free_icon.svg" />Início</li>
              <li className="botoes-meunu-vertical">
              <img className="icones-menu" src="https://icon-library.com/images/trending-icon/trending-icon-2.jpg" />Em alta</li>
              <li className="botoes-meunu-vertical">
              <img className="icones-menu" src="https://cdn1.iconfinder.com/data/icons/youtube-23/31/Vector-4-512.png" />Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical"><img className="icones-menu" src="https://icon-library.com/images/youtube-icon-png-white/youtube-icon-png-white-22.jpg" />Originais</li>
              <li className="botoes-meunu-vertical"><img className="icones-menu" src="https://cdn1.iconfinder.com/data/icons/youtube-23/29/Vector-9-512.png" />Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=1 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media2" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=2 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media3" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=3 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media4" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=4 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media5" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=5 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media6" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=6 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media7" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=7 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media8" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=8 " alt="" />
              <h4>{titulo}</h4>
            </div>
          </section>
        </main>
        
        <footer>
          <h4>O streaming da desenvolvedora em desenvovimento</h4>
        </footer>
      </div>
    </body>
  );
}

export default App;
