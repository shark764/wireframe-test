import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/images/cxengage_white.png';

const Header = styled.header`
  display: grid;
  grid-template-areas: 'logo nav';
  height: 50px;
  background-color: ${(props) => props.theme.colors.brand};
  padding-left: 20px;
  padding-right: 20px;
`;
const Nav = styled.nav`
  grid-area: nav;
  display: grid;
  grid-template-columns: repeat(6, auto);
  align-items: center;
  justify-items: center;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors['accent-3']};

  &.active {
    color: ${({ theme }) => theme.colors['accent-1']};
  }

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const LogoLink = styled(StyledNavLink)`
  grid-area: logo;
  background: none;
  box-shadow: none;
  height: 100%;
  position: relative;
`;
const Logo = styled.img`
  vertical-align: middle;
  border: none;
  height: 23px;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

const links = [
  { label: 'SCHEDULE', to: '/schedule' },
  { label: 'AVAILABILITY', to: '/availability' },
  { label: 'REQUEST', to: '/request' },
  { label: 'TRADE', to: '/trade' },
  { label: 'MESSAGES', to: '/messages' },
  { label: 'TESTS', to: '/tests' },
];

function PageHeader() {
  return (
    <Header>
      <LogoLink
        to="/"
        isActive={(match, location) => {
          if (!match) {
            return false;
          }

          return location.pathname === '/';
        }}
      >
        <Logo src={logo} alt="logo" />
      </LogoLink>
      <Nav>
        {links.map((link) => (
          <StyledNavLink
            to={link.to}
            key={link.to}
            isActive={(match, location) => {
              if (!match) {
                return false;
              }

              return link.to === location.pathname;
            }}
          >
            <span>{link.label}</span>
          </StyledNavLink>
        ))}
      </Nav>
    </Header>
  );
}

export default PageHeader;
