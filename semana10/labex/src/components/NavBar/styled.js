import styled from "styled-components";
import { Nav } from "react-bootstrap";

export const NavLink = styled(Nav)`
  font-family: "Bebas Neue", cursive;
  font-size: 1.8em;
  padding: 5px 0 0 40px;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    padding: 30px 0 0 0;
    align-items: center;
  }
  @media (min-device-width: 421px) and (max-device-width: 800px) {
    align-items: flex-start;
    padding: 30px 0 0 30px;
  }
`;
export const Logo = styled.img`
  :hover {
    cursor: pointer;
  }
`;
