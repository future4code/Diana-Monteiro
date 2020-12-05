import axios from "axios"
import {baseUrl, axiosConfig} from "../constants/urls"

export const createNewPost = (body, update, setLoading) => {
    setLoading(true)  
    axios
    .post(`${baseUrl}/posts`, body, axiosConfig)
    .then(() => {
      setLoading(false)  
        update()
    })
    .catch((error) => {
      setLoading(false)  
      console.log(error);
    });
}

export const createNewComment = (body, update, id, setLoading) => {
  setLoading(true)  
  axios
  .post(`${baseUrl}/posts/${id}/comment`, body, axiosConfig)
  .then(() => {
    setLoading(false)  
    update()
  })
  .catch((error) => {
    setLoading(false)  
    console.log(error);
  });
}



