import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// const Navbar = styled.nav`
//   height: 60px;
//   background: #000;
//   padding: 0rem calc((100vw -1300px) / 2);
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

const Navbar = styled.nav`
  height: 60px;
  background: #000;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #fff;
  padding-left: 1rem;
  text-decoration: none;
`;

const NavItems = styled.div``;

const NavbarLink = styled(Link)`
  color: #fff;
`;

const Header = () => {
  return (
    <Navbar>
      <Logo to="/">Animal</Logo>
      <NavItems>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarLink to="/services">services</NavbarLink>
      </NavItems>
    </Navbar>
  );
};

export default Header;
