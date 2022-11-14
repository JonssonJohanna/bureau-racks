import styled from "styled-components";
import { device } from "../Mediaqueries";

export const MapContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #f9f4ef;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  @media ${device.tablet} {
    width: 80%;
    flex-direction: row;
  }
`;

export const MapContainerText = styled.div`
  font-family: HWT;
  font-size: 1rem;
  font-weight: bold;
  color: #172d0a;
  display: flex;
  flex-direction: column;
  text-align: left;
  @media ${device.tablet} {
    width: 80%;
    padding: 3rem 3rem 2rem 3rem;
    width: 30%;
    font-size: 1.5rem;
  }
`;

//Test för att få 'filtrera val' att hamna i column i mobil
export const FilterHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FilterHeading = styled.p`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
`;
export const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  font-family: arial;

  @media ${device.tablet} {
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
  }
`;

export const BureauLink = styled.a`
  cursor: pointer;
  font-weight: bold;
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
  :hover {
    ::after {
      background-color: #d9d9d9;
    }
  }
  :checked {
    ::after {
      background-color: #172d0a;
    }
    :disabled {
      cursor: not-allowed #d9d9d9;
      background-color: #d9d9d9;
      :hover {
        ::after {
          background-color: #d9d9d9;
        }
      }
      :checked {
        ::after {
          background-color: #d9d9d9;
        }
        :hover {
          background-color: #d9d9d9;
          ::after {
            background-color: #d9d9d9;
          }
        }
      }
    }
  }
`;
