import styled from "styled-components";

export const MapContainerWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  background: #f9f4ef;
  margin-bottom: 2rem;
`;

export const MapContainerText = styled.div`
  font-family: HWT;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 3rem 3rem 2rem 3rem;
  color: #172d0a;
  width: 30%;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: #f9f4ef;
  color: #172d0a;
  padding: 1rem;
`;
export const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  font-family: arial;
  &:nth-child(1) {
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
  &:nth-child(2) {
    padding-bottom: 1rem;
  }
  &:nth-child(3) {
    padding-bottom: 1rem;
  }
`;

export const Radio = styled.input`
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  width: 1.5em;
  height: 1.5em;
  border: 2px solid black;
  background-color: #d9d9d9;
  margin-right: 1rem;

  border-radius: 50%;
  ::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 0.75em;
    height: 0.75em;
    margin: 3px;
  }
`;
