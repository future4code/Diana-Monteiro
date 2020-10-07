let arrayPost = []

function criarPost () {
const tituloPost= document.getElementById("titulo-post")
const autorPost = document.getElementById("autor-post")
const conteudoPost = document.getElementById("conteudo-post")
const containerPost = document.getElementById("container-de-posts")
const imagemPost = document.getElementById("img-post")

let postBlog = {
    titulo: tituloPost.value,
    autor: autorPost.value,
    conteudo: conteudoPost.value,
    imagem: imagemPost.value
}

arrayPost = [...arrayPost, postBlog]

if (postBlog.titulo !== "" && postBlog.autor !== "" && postBlog.conteudo !== "" && postBlog.imagem !==""){
    containerPost.innerHTML += `<h2>${postBlog.titulo}<h2>`
    containerPost.innerHTML += `<h3>Por:${postBlog.autor}<h3>`
    containerPost.innerHTML += `<p>${postBlog.conteudo}<p>`
    containerPost.innerHTML += `<img class="imgpost" src=${imagemPost.value}>`
}else {
    window.alert("Faça uma postagem maneira!")
}

tituloPost.value = ""
autorPost.value = ""
conteudoPost.value = ""
imagemPost.value = ""

}

// if(taskInput.value !== ""){ 
//     day.innerHTML += `<li class="list" onclick="itsDone(this)"> &#10149; ${timeInput.value} - ${taskInput.value} </li>`
// }else {
//     alert("Digite uma nova tarefa!")
// }
// taskInput.value = ""

