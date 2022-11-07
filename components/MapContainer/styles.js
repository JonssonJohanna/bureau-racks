import styled from "styled-components";

export const MapContainerWrapper = styled.div`
  height: 50%;
  width: 65%;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  background: #F9F4EF;
  border: 1px;

 
`;

export const GoogleMap = styled.map`
flex-direction: row;  
`;

export const MapContainerText = styled.div`
  font-family: HWT;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 3rem 3rem 2rem 3rem;
  color: #172D0A;
  width: 30%;
  display: flex;
flex-direction:column;
`;

export const Button = styled.button`
  background-color: #F9F4EF;
  color: #172D0A;
  padding: 1rem;
`;
