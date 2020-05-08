import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// ИЛИ ЧЕРЕЗ АКТИВКЛАССНЕЙМ
// const activeClassName = 'nav-item-active'

// const StyledLink = styled(NavLink).attrs({ activeClassName })`
//   &.${activeClassName} {
//     color: red;
//   }
// `;

// ИЛИ ЧЕРЕЗ АКТИВСТАЙЛ

const activeStyle = {
  color: 'green',
};

const StyledLink = styled(NavLink).attrs({ activeStyle })`
  color: blue; ////default color
  :hover {
    color: violet; ////color when user hover over the link
  }
  :active {
    color: red; ////color when user clicked on the link
  }
  &.${activeStyle} ////add color to current page location
`;

const Nav = () => {
  return (
    <ul>
      <li>
        <StyledLink to="/" exact>
          Home
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/about">About</StyledLink>
      </li>
      <li>
        <StyledLink to="/articles">Articles</StyledLink>
      </li>
    </ul>
  );
};

export default Nav;
