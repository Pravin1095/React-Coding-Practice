import styled from "styled-components";

export const RedLight = styled.div`
  ${(props) => props.color && "visibility: hidden;"}
  background: red;
  border-radius: 100%;
  height: 50%;
  width: 50%;
`;
export const YellowLight = styled.div`
  ${(props) => props.color && "visibility: hidden;"}
  background: yellow;
  border-radius: 100%;
  height: 50%;
  width: 50%;
`;
export const GreenLight = styled.div`
  ${(props) => props.color && "visibility: hidden;"}
  background: green;
  border-radius: 100%;
  height: 50%;
  width: 50%;
`;

export const ParentWidth = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
