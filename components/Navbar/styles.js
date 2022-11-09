import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  padding: 2rem 4rem 1rem 4rem;
  margin-bottom: 44px;
  font-family: HWT;
  border-bottom: #172d0a 2px solid;
`;

export const NavLink = styled.a`
  padding-left: 1rem;
  cursor: pointer;
  font-size: 30px;
  color: #172d0a;
`;
