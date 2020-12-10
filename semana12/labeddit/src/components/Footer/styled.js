import styled from "styled-components";


export const DivFooter = styled.div`
  background-image: radial-gradient(circle at 50% -20.71%, #ade5ff 0, #7dcefb 25%, #3cb5f2 50%, #009ce9 75%, #0085e0 100%); 
  font-family: 'Varela Round', sans-serif;
  color: #0088e1;
  height: 7em;
  padding: 1em 15em;

  @media (min-device-width: 320px) and (max-device-width: 420px) {
    padding: 1em;
    height: 100%;
  }
`;

export const DivTop = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    @media (min-device-width: 320px) and (max-device-width: 420px) {
        flex-direction: column;
        align-items: center;
    }
`

export const DivImg = styled.div`
    text-align: end;
    @media (min-device-width: 320px) and (max-device-width: 420px) {
        text-align: center;  
        padding: 10px 0;
}
`

export const ImgMedia = styled.img`
    width: 15%;
    padding-left: 20px;
`

export const DivText = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Copyright = styled.p`
  text-align: center;
  padding-top: 10px;
  border: 1px solid black;
  border-left: none;
  border-right: none;
  border-bottom: none;
`
export const Link = styled.a`
  text-decoration: none;
  color: #222222;
  &:hover{
    text-decoration: none;
    color: #0088e1;
  }
`