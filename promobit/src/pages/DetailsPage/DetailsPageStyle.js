import styled from "styled-components"


export const MainContainer = styled.div`
max-height: 100vh;
box-sizing: border-box;
`
export const MovieBox = styled.div`
display: flex;
line-height: 1.5;
flex-direction: column;
margin-right: auto;
margin-left: auto;
padding: 10px;
width: 400px;

img{height: 300px;
    width: fit-content;
    margin-right: auto;
margin-left: auto;
}
`
export const MovieTitle = styled.div`
font-size: 20px;
padding: 10px;
margin-right: auto;
margin-left: auto;
`
export const Detail = styled.div`
text-align: justify;
`

export const ButtonContainer = styled.div`
text-align: center;

`

export const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: #1F1D36;
  border: 2px solid black;
`