import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #189ab4;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ff2511;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    background: #fff;
    color: #808080;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    background: #189ab4;
    text-align: center;
    position: absolute;
    top: 65px;
    left: 0;
    right: 0;
  }
`;

export const MobileMenuItem = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  padding: 1rem;
  &:hover {
    color: #ff2511;
  }
`;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <Bars onClick={handleMobileMenuToggle} />
        <NavMenu>
          <NavLink to="/boats">Boats</NavLink>
          {/* Add other navigation links here */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/newboat">Publish your Ad</NavBtnLink>
          {/* Add other buttons here */}
        </NavBtn>
      </Nav>
      {showMobileMenu && (
        <MobileMenu>
          <MobileMenuItem to="/boats" onClick={handleMobileMenuToggle}>
            Boats
          </MobileMenuItem>
          {/* Add other mobile menu items here */}
        </MobileMenu>
      )}
    </>
  );
};

export default Navbar;
