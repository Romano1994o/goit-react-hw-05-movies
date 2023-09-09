import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const MovieDetailsContainer = styled.div`
  padding: 20px;
  text-align: left;
`;

export const BackButton = styled(NavLink)`
  text-decoration: none;
  color: #0074cc; /* Button text color */
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 16px; /* Button text font size */
  padding: 5px 10px; /* Button padding */
  border: 1px solid #0074cc; /* Button border */
  border-radius: 4px; /* Button border radius */
  transition: color 0.3s, background-color 0.3s; /* Transition for text and background color */

  &:hover {
    color: #fff; /* Text color on hover */
    background-color: #0074cc; /* Background color on hover */
  }

  svg {
    font-size: 24px; /* Icon size */
  }
`;
