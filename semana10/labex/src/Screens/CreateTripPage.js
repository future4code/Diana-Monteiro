import React from "react";
import axios from 'axios'
import NavBar from "../components/NavBar/Navbar";
import { useHistory } from "react-router-dom";
import { StyledButton } from "../components/StyledButton";
import { Form, Col } from "react-bootstrap";
import { useForm } from "../hooks/useForm";
import { useProtectedPage } from '../hooks/useProtectedPage';
import { baseUrl, axiosConfig } from "../constants/urls";


const CreateTripPage = () => {
  const {form, onChange, resetState} = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: 50,
  })

  useProtectedPage()

  const history = useHistory();

  const goBackAdmPage = () => {
    history.push("/admin");
  };

  const handleInputChange = (event) => {
    const {value, name} = event.target;

    onChange(value, name);
  }

  // const currentDate = () => {
  //   let d = new Date();
  //   let localDate = `${d.getDate()} / ${
  //     d.getMonth() + 1
  //   } / ${d.getFullYear()}`;
  
  //   return localDate;
  // };

  // console.log(currentDate())

  const onSubmitNewTrip = (event) => {
    event.preventDefault()

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays
    }

    axios
        .post(`${baseUrl}/trips`, body, axiosConfig)
        .then(() => {
          if(window.confirm("Mission successfully created! Do you want to do another one?")){
            resetState()
          } else{
            alert("Ok! Thank you for contribuation!")
            history.push('/trips/admlist')
          }
        })
        .catch(error => {
          alert("Something is wrong, check the information entered!")
          console.log(error)
        })
  }

  return (
    <div>
      <NavBar />
      <h1>Create a new mission</h1>
      <Form onSubmit={onSubmitNewTrip}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control 
            required
            type="text" 
            placeholder="Enter Mission Name "
            onChange={handleInputChange}
            value={form.name}
            name={'name'}
            pattern={"^.{5,}"}
            />
          </Form.Group>

          <Form.Group as={Col}>
          <Form.Label>Planet</Form.Label>
            <Form.Control as="select"
            required
            defaultValue="Choose one Planet"
            onChange={handleInputChange}
            value={form.planet}
            name={'planet'}
            >
              <option>Choose one Planet</option>
              <option>Mercury</option>
              <option>Venus</option>
              <option>Earth</option>
              <option>Mars</option>
              <option>Jupiter</option>
              <option>Saturn</option>
              <option>Uranus</option>
              <option>Neptune</option>
              <option>Pluto (Dwarf Planet)</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
          <Form.Label>Mission Data</Form.Label>
            <Form.Label>Duration in Days</Form.Label>
            <Form.Control 
            required
            type={"number"}
            onChange={handleInputChange}
            value={form.durationInDays}
            name={'durationInDays'}
            min="50" 
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Mission Data</Form.Label>
            <Form.Control 
            required
            type="date"
            onChange={handleInputChange}
            value={form.date}
            name={'date'}
            min={"2020-11-20"} 
            />
          </Form.Group>
        </Form.Row>

        <Form.Group >
          <Form.Label>Description</Form.Label>
          <Form.Control placeholder="Describe the mission."
          required
          onChange={handleInputChange}
          value={form.description}
          name={'description'}
          pattern={"^.{50,}"}
          />
        </Form.Group>

        
        <StyledButton variant="primary" type="submit">
          Create Mission
        </StyledButton>
      </Form>
      <StyledButton onClick={goBackAdmPage}>
        Voltar para Opções de Adm
      </StyledButton>
    </div>
  );
};

export default CreateTripPage;
