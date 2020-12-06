import axios from "axios";
import { baseUrl, axiosConfig } from "../constants/urls";

export const voteOnPost = (body, update, id) => {
  axios
    .put(`${baseUrl}/posts/${id}/vote`, body, axiosConfig)
    .then(() => {
      update();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const voteOnComment = (body, update, id, commentId) => {
  axios
    .put(`${baseUrl}/posts/${id}/comment/${commentId}/vote`, body, axiosConfig)
    .then(() => {
      update();
    })
    .catch((error) => {
      console.log(error);
    });
};
