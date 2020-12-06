import { useState, useEffect } from "react";
import axios from "axios";
import { axiosConfig } from "../constants/urls";

export function useRequestData(url) {
  const [data, setData] = useState({});

  const getData = () => {
    axios
      .get(url, axiosConfig)
      .then((response) => {
        setData(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(() => {
    getData();
  }, [url]);

  return [data, getData];
}
