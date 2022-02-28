import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border: solid 2px black;
  width: 47%;
  margin: 15px 0;
  background-color: white;
  box-shadow: 5px 3px 3px grey;
  border-radius: 5px;

  div {
    display: flex;
    justify-content: space-evenly;
    button {
      width: 45%;
      height: 35px;
      margin-bottom: 15px;
      background-color: #bf8b67;
      border-radius: 5px;
      font-weight: bold;
      color: black;
    }
  }
`;
