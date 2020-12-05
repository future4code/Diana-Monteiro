import React, {useState} from "react";
import { useHistory } from "react-router-dom";

import { Form} from "react-bootstrap";

import { useForm } from "../../hooks/useForm";
import { signUp } from "../../services/user";
import {goToLogin} from "../../routes/condinator"

import { StyledButton } from "../../components/Buttons/StyledButtonForm"
import { Title, FormSignup, Text, DivSignup} from "./styled"
import Loader from "../../components/Loader/LoaderSmall"

const Register = () => {
  const [loading, setLoading] = useState(false)

  const { form, onChange } = useForm({
    email: "",
    password: "",
    username: "",
  });

  const history = useHistory();

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    signUp(form, history,setLoading)
  }

  return (
    <DivSignup>
    <FormSignup
    onSubmit={handleSubmission} className="col-md-6">
      <Title>Faça parte do Blueddit</Title>
      <Form.Group>
        <Form.Label>
          Usuário:
        </Form.Label>
          <Form.Control
            type="name"
            placeholder="Seu nome de usuário deve conter ao menos 3 caracteres"
            value={form.username}
            name={"username"}
            onChange={handleInputChange}
            pattern={"^.{3,}"}
          />
      </Form.Group>

      <Form.Group>
        <Form.Label>
          E-mail:
        </Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu melhor e-mail"
            value={form.email}
            name={"email"}
            onChange={handleInputChange}
          />
      </Form.Group>
      <Form.Group >
        <Form.Label>
          Senha:
        </Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite uma senha "
            value={form.password}
            name={"password"}
            onChange={handleInputChange}
          />
      </Form.Group>
      <Form.Group>
          <StyledButton block type="submit" variant="transparent">
          {loading ? <Loader/> : 'Cadastrar'}
          </StyledButton>
      </Form.Group>
      <Form.Group>
        <Text onClick={() => goToLogin(history)}>
          Ih esqueci, já tenho conta! Quero fazer meu login!
        </Text>
      </Form.Group>
    </FormSignup>
    </DivSignup>
  );
};

export default Register;
