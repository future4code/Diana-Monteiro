import styled from "styled-components"
import { Navbar, Nav} from "react-bootstrap"

export const NavBar = styled(Navbar)`
    background-image: radial-gradient(circle at 50% -20.71%, #ade5ff 0, #7dcefb 25%, #3cb5f2 50%, #009ce9 75%, #0085e0 100%); 
    font-family: 'Varela Round', sans-serif;
    padding: 0px 20px 0px 10px;
    font-weight: bold;
    font-size: 1.1em;
`
export const Logo = styled.img`
    width: 16%;
    padding: 5px 0;
    @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
    width: 60%;
    }
`
export const NavText = styled(Nav)`
    @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
        text-align: center;
    }
`

