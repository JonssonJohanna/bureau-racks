import styled from "styled-components";
import { device } from "../Mediaqueries";

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 44px;
  font-family: HWT;
<<<<<<< Updated upstream
  border-bottom: #172d0a 1.5px solid;
  @media ${device.tablet} {
    padding: 2rem 4rem 1rem 4rem;
  }
=======
  border-bottom: var(--green) 1.5px solid;
>>>>>>> Stashed changes
`;

export const NavLink = styled.a`
  padding-left: 3rem;
  cursor: pointer;
<<<<<<< Updated upstream
  font-size: 15px;
  color: #172d0a;
  @media ${device.tablet} {
    font-size: 30px;
  }
=======
  font-size:var(--h2-desktop);
  color:var(--green);
>>>>>>> Stashed changes
`;
