import styled from "styled-components";
import { device } from "../Mediaqueries";

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const Heading = styled.h1`
  font-family: "HWT";
  font-size: 2rem;
  color: #172d0a;
  padding: 0%;
  align-self: center;
  @media ${device.tablet} {
    font-size: 5.5rem;
  }
`;

export const AboutText = styled.text`
  font-size: 1rem;
  font-family: Avenir;
  color: #172d0a;
  text-align: center;
  align-self: center;
  width: 70%;
  @media ${device.tablet} {
    width: 50%;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
