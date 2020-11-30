import styled from "styled-components";

export const DivFooter = styled.div`
  background-color: #13130d;
  height: 23em;
  padding: 0 7em;
  color: #949380;
  font-family: "Julius Sans One", sans-serif;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
    padding: 1em;
    height: 100%;
  }
`;

export const DivTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 45px;
  border: 1px solid black;
  border-left: none;
  border-right: none;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
    text-align: center;
    font-size: 20px;
  }
`;

export const DivBottom = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #949380;
  border-left: none;
  border-right: none;
  border-bottom: none;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
    text-align: center;
    font-size: 20px;
  }
`;

export const DivMedias = styled.div`
  display: flex;
  padding-top: 20px;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    justify-content: space-between;
    margin: 0 20px;
  }
`;

export const SectionLinks = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    align-items: center;
  }
`;

export const SectionLogo = styled.section`
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    justify-content: center;
  }
`;

export const ImgLogo = styled.img`
  width: 50%;
  height: 50%;
  padding-bottom: 55px;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 80%;
  }
`;

export const ImgMedia = styled.img`
  width: 50%;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 200%;
  }
`;

export const LinkImg = styled.a`
  width: 3vw;
`;

export const Link = styled.a`
  text-decoration: none !important;
  padding-bottom: 20px;
  text-align: end;
  color: #949380;
  :hover {
    color: white;
  }
`;

export const Title = styled.h4`
  padding: 20px 0;
  color: white;
`;

export const Copyright = styled.p`
  text-align: end;
  padding-top: 20px;
  font-size: 15px;
  width: 25em;
`;

export const Adress = styled.p`
  text-align: start;
  padding-bottom: 25px;
  font-size: 15px;
  width: 25em;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    text-align: center;
  }
`;
