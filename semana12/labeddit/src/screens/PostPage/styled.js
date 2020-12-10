import styled from "styled-components"

export const DivFeed = styled.div`
    background-color: #e2eafc;
    padding: 1em 0px 2em 0px;
    margin: 0 auto;
    font-family: 'IBM Plex Sans', sans-serif;
`
export const DivPost = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 15em;
    width: 64%;
    border-radius: 5px;
    border: 2px outset;
    padding: 20px 0;
    background-color: white;
    @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
        margin: 20px;
        width: 90%;
    }
`;

export const Arrow = styled.img`
  width: 60%;
  :hover{
    cursor: pointer;
  }
`;

export const DivVote = styled.div`
  text-align: center;
  width: 2em;
`;