import axios from "axios"
import {baseUrl, axiosConfig} from "../constants/urls"

export const createNewPost = (body, update) => {
    axios
    .post(`${baseUrl}/posts`, body, axiosConfig)
    .then(() => {
        alert("Post criado com sucesso!")
        update()
    })
    .catch((error) => {
      console.log(error);
    });
}

export const createNewComment = (body, update, id) => {
  axios
  .post(`${baseUrl}/posts/${id}/comment`, body, axiosConfig)
  .then(() => {
      alert("Comentário criado com sucesso!")
      update()
  })
  .catch((error) => {
    console.log(error);
  });
}



