import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Form, CardImg } from "react-bootstrap";

import { useForm } from "../../hooks/useForm";
import { useProtectPage } from "../../hooks/useProtectPage";
import { goToSignUp } from "../../routes/condinator";
import { login } from "../../services/user";

import { StyledButton } from "../../components/Buttons/StyledButtonForm";
import Loader from "../../components/Loader/LoaderSmall";
import { DivLogin, Title, FormLogin, Text, Gif } from "./styled";
import gif from "../../assests/Blueddit.gif";

const LoginPage = () => {
  useProtectPage();
  const [loading, setLoading] = useState(false);

  const { form, onChange } = useForm({
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    login(form, history, setLoading);
  };

  return (
    <DivLogin>
      <FormLogin className="col-md-4 text-center" onSubmit={handleSubmission}>
        <Form.Group controlId="formBasicEmail">
          <Title>Faça seu Login</Title>
          <Form.Control
            type="email"
            value={form.email}
            name={"email"}
            onChange={handleInputChange}
            placeholder="Digite seu e-mail"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            name={"password"}
            value={form.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <StyledButton block variant="transparent" type="submit">
            {loading ? <Loader /> : "Entrar"}
          </StyledButton>
          <Text onClick={() => goToSignUp(history)}>
            Novo por aqui? Inscreva-se para acessar sua timeline!
          </Text>
        </Form.Group>
      </FormLogin>
      <Gif src={gif} />
    </DivLogin>
  );
};

export default LoginPage;
