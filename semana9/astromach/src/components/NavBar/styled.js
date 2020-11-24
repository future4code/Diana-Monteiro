import styled from "styled-components";

export const DivNav = styled.div`
    height: 55px;
    border-bottom: 1px solid lightgray;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding: 0px 10px;
    flex-shrink: 0;
`

export const ImgBack = styled.img`
    width: 11%;
    cursor: pointer;
    &:hover{
        padding: 3px;
    }
`

export const Logo = styled.img`
    width: 60%;
    left: 0px;
`