import React from "react";

import { Form, Button } from "react-bootstrap";

import { createNewComment } from "../../../services/post"
import { useForm } from "../../../hooks/useForm";

import { DivComment } from "./styled"

export const CreateComment = (props) => {
  const { form, onChange, resetState } = useForm({
    text: "",
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    createNewComment(form, props.update, props.id);
    resetState();
  }

  return (
    <DivComment>
    <Form className="col-md-8" onSubmit={handleSubmission}>
      <Form.Group controlId="formBasicPassword">
        <Form.Control
          type="text"
          placeholder="Escreva seu comentário!"
          name={"text"}
          value={form.text}
          onChange={handleInputChange}
          as="textarea" rows={3}
        />
      </Form.Group>
      <Button block variant="primary" type="submit">
        Comentar
      </Button>
    </Form>
    </DivComment>
  );
};
