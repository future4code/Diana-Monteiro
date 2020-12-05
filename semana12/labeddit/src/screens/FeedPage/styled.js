import styled from "styled-components"

export const DivFeed = styled.div`
    background-color: #e2eafc;
    padding: 4em 0px;
    margin: 0 auto;
    font-family: 'IBM Plex Sans', sans-serif;
    @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
        padding: 2em 0px;
    }
`
export const DivPost = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 17em;
    width: 60%;
    border-radius: 5px;
    border: 2px outset;
    padding: 20px 0;
    background-color: white;
    @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
        margin: 20px;
        width: 90%;
    }

`