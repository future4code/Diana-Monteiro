import React from "react";
import { useHistory } from "react-router-dom";
import { Mainbox, Text, GoTo } from "./styled";
import error from "../../assests/error.gif";
import { goBack } from "../../routes/condinator";

const Error = () => {
  const history = useHistory();

  return (
    <Mainbox>
      <Text>
        Você está perdido?
        <GoTo onClick={() => goBack(history)}>Clique aqui</GoTo>para voltar!{" "}
      </Text>
      <img src={error} />
    </Mainbox>
  );
};

export default Error;
