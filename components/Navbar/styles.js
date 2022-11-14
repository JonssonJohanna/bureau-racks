import styled from "styled-components";
import { device } from "../Mediaqueries";

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 44px;
  font-family: HWT;
  border-bottom: var(--green) 1.5px solid;
`;

export const NavLink = styled.a`
  padding-left: 3rem;
  cursor: pointer;
  font-size: var(--h2-desktop);
  color: var(--green);
`;
