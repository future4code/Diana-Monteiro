import React, {useState, useEffect} from "react";
import axios from "axios";
import {ButtonClear, Message, DivMatch, DivMatches, Name, ImgMatch} from "./styled";

const urlBase =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diana-monteiro/";

const MatchScreen = () => {

  const [matches, setMatches] = useState([])

  useEffect(() => {
    getMatches();
  }, []);

  useEffect(() => {
    getMatches()
  }, [matches])

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
      getMatches();
      window.alert("Matchs deletados com sucesso!");
    })
    .catch(err => {
      console.log(err);
    });
  }

  const seeAllmatches = matches.map((match) => {
    return <DivMatch key={match.id}>
      <ImgMatch src={match.photo}/>
      <Name>{match.name}</Name>
      </DivMatch>;
  })

    return(
      <DivMatches>
        {seeAllmatches}
        {matches.length == 0 ? <Message> Você Não tem matches!</Message> : null}
        <ButtonClear onClick={()=>clearMatches(matches.id)}>Limpar Matches</ButtonClear>
      </DivMatches>
    )

}
export default MatchScreen