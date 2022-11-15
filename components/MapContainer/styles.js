import styled from "styled-components";
import { device } from "../Mediaqueries";

export const MapContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: var(--offwhite);
  margin-bottom: 2rem;
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
  font-size: var(--h3-mobile);
  font-weight: bold;
  color: var(--green);
  display: flex;
  flex-direction: column;
  text-align: left;
  @media ${device.tablet} {
    width: 80%;
    padding: 3rem 3rem 2rem 3rem;
    width: 30%;
    font-size: var(--h3-desktop);
  }
`;

//Test för att få 'filtrera val' att hamna i column i mobil
export const FilterHeadingWrapper = styled.div`
  padding-bottom: 1rem;
`;
export const FilterHeading = styled.p`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
`;
export const Label = styled.label`
  font-size: var(--p-desktop);
  font-weight: 600;
  font-family: "Avenir";

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
    &:nth-child(4) {
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
  background-color: var(--checkbox);
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
      background-color: var(--checkbox);
    }
  }
  :checked {
    ::after {
      background-color: var(--green);
    }
    :disabled {
      cursor: not-allowed var(--checkbox);
      background-color: var(--checkbox);
      :hover {
        ::after {
          background-color: var(--checkbox);
        }
      }
      :checked {
        ::after {
          background-color: var(--checkbox);
        }
        :hover {
          background-color: var(--checkbox);
          ::after {
            background-color: var(--checkbox);
          }
        }
      }
    }
  }
`;
