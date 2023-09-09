import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.nav`
  padding: 20px;
  border-bottom: 2px solid black;
  font-weight: 700;
  font-size: 24px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: black;
  position: relative;
  transition: color 0.3s, transform 0.3s;
  
  &.active {
    color: #0074cc; 
  }

  &:before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #ff5733; 
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s, background-color 0.3s; 
  }

  &:hover:not(.active) {
    color: #ff5733; 
    &:before {
      transform: scaleX(1);
      background-color: transparent; 
    }
  }

  &:focus:not(.active) {
    color: #ff5733; 
    text-decoration: none;
  }
`;
