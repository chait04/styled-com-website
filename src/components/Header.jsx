import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  height: 60px;
  background: transparent;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #fff;
  padding-left: 1rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;

  &:hover {
    color: #0d2d30;
    background-color: #ecde9c;
    transition: 0.3s all;
    border-radius: 2rem;
    font-weight: bold;
    padding: 2px 5px;
  }
`;

const NavItems = styled.div``;

const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 1rem;

  &:hover {
    color: #0d2d30;
    background-color: #ecde9c;
    transition: 0.3s all;
    border-radius: 2rem;
    font-weight: bold;
  }
`;

const Header = () => {
  return (
    <Navbar>
      <Logo to="/">Animal</Logo>
      <NavItems>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarLink to="/services">Services</NavbarLink>
      </NavItems>
    </Navbar>
  );
};

export default Header;
