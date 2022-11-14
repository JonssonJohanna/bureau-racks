import styled from "styled-components";
import { device } from "../Mediaqueries";

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

export const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const Heading = styled.text`
  font-family: "HWT";
  font-size: 2rem;
  color: #172d0a;
  padding-right: 1rem;

  @media ${device.tablet} {
    font-size: 5.5rem;
  }
`;

export const HeroDescription = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const HeroText = styled.text`
  width: 45%;
  font-family: Avenir;
  text-align: center;
  padding-bottom: 1rem;
`;

export const Intro = styled.div`
  padding-top: 2rem;
`;
