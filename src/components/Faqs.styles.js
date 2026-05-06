import styled from "styled-components";

export const FaqContainer = styled.div`
width : 100%;
display : flex;
flex-direction: column;
align-items : center;
justify-content : center;
  #title:nth-child(odd) {
    background: green;
  }
   #title:nth-child(even) {
    background: grey;
  }
`;

export const Title= styled.div`
cursor: pointer;
background : white;
`

export const Content = styled.div`

`
