import styled from "styled-components"

export const MovieContainer = styled.div`
    display: grid;
    margin: 25px auto 0 35px;
    padding: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    img{
        height: 300px;
        border: 1px solid black;
    }
`
export const ImgStyled = styled.img`
    cursor: pointer;
`

export const TextStyled = styled.p`
    cursor: pointer;
`