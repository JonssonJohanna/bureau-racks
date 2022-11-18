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
  font-size: var(--h1-mobile);
  color: var(--green);
  padding: 0%;
  align-self: center;
  margin-top: 0;
  @media ${device.tablet} {
    font-size: var(--h1-desktop);
  }
`;
export const AboutText = styled.text`
  font-size: var(--p-desktop);
  font-family: "Avenir";
  color: var(--green);
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
