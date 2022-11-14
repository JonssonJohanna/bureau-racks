import styled from "styled-components";
import { device } from "../Mediaqueries";

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
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

export const walking = styled.image`
  width: 100px;
`;
