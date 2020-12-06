import React, { useState } from "react";

import { Form } from "react-bootstrap";

import { createNewPost } from "../../../services/post";
import { useForm } from "../../../hooks/useForm";
import { StyledButtonUser } from "../../Buttons/StyledButtonUser";
import Loader from "../../Loader/LoaderSmall";

import { DivPost } from "./styled";

export const CreatePost = (props) => {
  const [loading, setLoading] = useState(false);

  const { form, onChange, resetState } = useForm({
    title: "",
    text: "",
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    createNewPost(form, props.update, setLoading);
    resetState();
  };

  return (
    <DivPost>
      <Form onSubmit={handleSubmission} className="col-md-8">
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            value={form.title}
            name={"title"}
            onChange={handleInputChange}
            placeholder="Digite um título para seu post"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="Escreva seu novo post"
            name={"text"}
            value={form.text}
            onChange={handleInputChange}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <StyledButtonUser block variant="primary" type="submit">
          {loading ? <Loader /> : "Postar"}
        </StyledButtonUser>
      </Form>
    </DivPost>
  );
};
