let arrayPost = [];
const tituloPost = document.getElementById("titulo-post");
const autorPost = document.getElementById("autor-post");
const conteudoPost = document.getElementById("conteudo-post");
const containerPost = document.getElementById("container-de-posts");
const imagemPost = document.getElementById("img-post");

const inserirNoHTML= () => {
  let postBlog = {
    titulo: tituloPost.value,
    autor: autorPost.value,
    conteudo: conteudoPost.value,
    imagem: imagemPost.value,
  };

  arrayPost = [...arrayPost, postBlog];

  if(postBlog.titulo !== "" && postBlog.autor !== "" && postBlog.conteudo !== "" && postBlog.imagem !== "") {
    containerPost.innerHTML += `<h2>${postBlog.titulo}<h2><br>`;
    containerPost.innerHTML += `<h3>Por:${postBlog.autor}<h3><br>`;
    containerPost.innerHTML += `<p>${postBlog.conteudo}<p><br>`;
    containerPost.innerHTML += `<img class="imgpost" src=${imagemPost.value}>`;
  } else {
    window.alert("Faça uma postagem maneira!");
  }
}

const apagarInput = () => {
  tituloPost.value = "";
  autorPost.value = "";
  conteudoPost.value = "";
  imagemPost.value = "";
}

const criarPost = () => {
  inserirNoHTML();
  apagarInput();
}
