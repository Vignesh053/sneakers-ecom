import React from "react";
import SuperHeader from "../superHeader/SuperHeader";
import Logo from "../Logo/Logo";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../../constants";

const Header = () => {
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
        <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side/>
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  height: 72px;
  display: flex;
  align-items: baseline;
  padding: 16px 32px;
  position: relative;
  border-bottom: 1px ${COLORS.gray[300]} solid;
`;



const Side = styled.div`
    flex: 1;
`

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  align-items: center;
  margin: 0px 48px;
`;

const NavLink = styled.a`
  font-size: 1.125 rem;
  text-transform: uppercase;
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  color: ${COLORS.gray[900]};

  &:first-of-type{
    color: ${COLORS.secondary};
  }
`;

export default Header;
