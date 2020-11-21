import React from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Form, Col } from "react-bootstrap";
import NavBar from "../components/NavBar/Navbar";
import { StyledButton } from "../components/StyledButton";
import { useForm } from "../hooks/useForm";
import { baseUrl } from "../constants/urls";
import { Countries } from "../constants/Countries";
import { DivForm, TitleList } from "./styled";

const ApplicationFormPage = () => {
  const { form, onChange } = useForm({
    name: "",
    age: 18,
    applicationText: "",
    profession: "",
    country: "",
  });

  const history = useHistory();

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  };

  const { id } = useParams();

  const onSubmitApplication = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };
    axios
      .post(`${baseUrl}/trips/${id}/apply`, body)
      .then(() => {
        alert("Application successfully submitted! Stay tuned to the result!");
        history.push("/trips/list");
      })
      .catch((error) => {
        alert("Something is wrong, check your data!");
        console.log(error);
      });
  };

  return (
    <div>
      <NavBar />
      <DivForm>
        <TitleList>Make your application here</TitleList>
              <Form
                onSubmit={onSubmitApplication}
                className="col-md-8 offset-md-2"
              >
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your full name"
                      onChange={handleInputChange}
                      value={form.name}
                      name={"name"}
                      pattern={"^.{3,}"}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Age *Only for people over 18.</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      min="18"
                      onChange={handleInputChange}
                      value={form.age}
                      name={"age"}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group>
                  <Form.Label>
                    Application Text *Enter more than 30 characters.
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Answer why are you a good candidate?"
                    onChange={handleInputChange}
                    value={form.applicationText}
                    name={"applicationText"}
                    pattern={"^.{30,}"}
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      Profession *Enter more than 10 characters.
                    </Form.Label>
                    <Form.Control
                      required
                      onChange={handleInputChange}
                      value={form.profession}
                      name={"profession"}
                      pattern={"^.{10,}"}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      required
                      as="select"
                      defaultValue="Where are you from?"
                      onChange={handleInputChange}
                      value={form.country}
                      name={"country"}
                    >
                      <option>Where are you from?</option>
                      <Countries />
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <StyledButton variant="transparent" 
                block
                type="submit">
                  Submit
                </StyledButton>
              </Form>
      </DivForm>
    </div>
  );
};

export default ApplicationFormPage;
