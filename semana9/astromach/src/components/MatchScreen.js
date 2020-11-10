import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components"

const Button = styled.button`
  display: flex;
  position: fixed;
  align-items: flex-end;
`
const DivMatch = styled.div`
  position: relative;
    height: 70px;
    padding: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    transition: all 0.2s ease 0s;
    cursor: pointer;
`
const DivMatches = styled.div`
  margin: 1em;

`

const Img = styled.img`
  height: 100%;
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
`

const urlBase =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diana-monteiro/";

const MatchScreen = (props) => {

  const [matches, setMatches] = useState([])

  useEffect(() => {
    getMatches();
  }, []);

  useEffect(() => {
    getMatches();
  }, [matches]);

  const getMatches = () => {
    axios
      .get(`${urlBase}matches`)
      .then(response => {
        setMatches(response.data.matches);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const clearMatches = (id) => {
    axios
    .put(`${urlBase}clear`)
    .then(() => {
      window.alert("Matchs deletados com sucesso!");
    })
    .catch(err => {
      console.log(err);
    });
  }

  const seeAllmatches = matches.map((match) => {
    return <DivMatch>
      <Img src={match.photo}/>
      <p>{match.name}</p>
      </DivMatch>;
  })

    return(
      <DivMatches>
        {seeAllmatches}
        <Button onClick={()=>clearMatches(matches.id)}>Limpar Matches</Button>
      </DivMatches>
    )

}
export default MatchScreen