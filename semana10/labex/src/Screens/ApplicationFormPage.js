import React from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import { Form, Col } from "react-bootstrap";
import { useRequestData } from "../hooks/useRequestData";
import NavBar from "../components/NavBar/Navbar";
import { StyledButton } from "../components/StyledButton";
import { useForm } from "../hooks/useForm";
import { baseUrl } from "../constants/urls";
import { Countries } from "../components/Countries";

const ApplicationFormPage = () => {
  const {form, onChange} = useForm({
    name: '',
    age: 18,
    applicationText: '',
    profession: '',
    country: '',
    trip: null
  })

  const handleInputChange = (event) => {
    const {value, name} = event.target;

    onChange(value, name);
  }

  const { id } = useParams();


  const onSubmitApplication = (event) => {
    event.preventDefault()

    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country
    }
    axios.post(`${baseUrl}/trips/${id}/apply`, body)
    .then(() => {
      alert("Application successfully submitted! Stay tuned to the result!")
    }).catch(error => {
      alert("Something is wrong, check your data!")
      console.log(error)
    })
  }

  console.log(onSubmitApplication)

  return (
    <div>
      <NavBar />

      <Form onSubmit={onSubmitApplication}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter your full name"
            onChange={handleInputChange}
            value={form.name}
            name={'name'}
            min="3"
            pattern={"[a-zA-ZÀ-ú ] {3,}"}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Age</Form.Label>
            <Form.Control 
            type="number"
            min="18" 
            placeholder="Enter your Age" 
            onChange={handleInputChange}
            value={form.age}
            name={'age'}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Application Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            placeholder="Answer why are you a good candidate?"
            onChange={handleInputChange}
            value={form.applicationText}
            name={'applicationText'}
            pattern={"[a-zA-ZÀ-ú ] {3,}"}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Profession</Form.Label>
            <Form.Control
             onChange={handleInputChange}
             value={form.profession}
             name={'profession'}
             />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Country</Form.Label>
            <Form.Control
             as="select" 
             defaultValue="Choose..."
             labelId="select-paises"
             onChange={handleInputChange}
             value={form.country}
             name={'country'}
             >
              <Countries/>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <StyledButton variant="primary" type="submit">
          Submit
        </StyledButton>
      </Form>
    </div>
  );
};

export default ApplicationFormPage;
