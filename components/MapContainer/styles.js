import styled from "styled-components";

export const MapContainerWrapper = styled.div`
  height: 50%;
  width: 65%;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  background-color: #172D0A;
`;

export const GoogleMap = styled.map`
flex-direction: row;    
`;

export const MapContainerText = styled.div`
  font-weight: bold;
  padding: 3rem;
  color: red;
  width: 50%;

  display: flex;
flex-direction:column;
`;

export const Button = styled.button`
  background-color: white;
  color: red;
  padding: 2rem;
`;
