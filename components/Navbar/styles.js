import styled from "styled-components";
import { device } from "../Mediaqueries";

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 44px;
  font-family: HWT;
  border-bottom: #172d0a 1.5px solid;
  @media ${device.tablet} {
    padding: 2rem 4rem 1rem 4rem;
  }
`;

export const NavLink = styled.a`
  padding-left: 3rem;
  cursor: pointer;
  font-size: 15px;
  color: #172d0a;
  @media ${device.tablet} {
    font-size: 30px;
  }
`;
