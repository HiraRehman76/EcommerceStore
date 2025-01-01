
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { primaryHeadingColor } from '../utilis/utilisStyle';
import Search from './Search';

const SubNavbarWrapper = styled.nav`
  display: flex;
  padding: 1rem;
  background-color: #fff;
  gap: 1rem;
.tab-item {
  &:hover {
    color: #F3F3F3;
    background-color: ${primaryHeadingColor};
  }
  background-color: #F3F3F3;
  color: ${primaryHeadingColor};
  border-radius: 8px;
  padding: 8px 16px;
  text-decoration: none;
}
`;
const SubNavbar: React.FC = () => (
  <SubNavbarWrapper>
    <Link className="tab-item" to="/">
      Men
    </Link>
    <Link className="tab-item" to="/cart">
      Women
    </Link>
    <Link className="tab-item" to="/cart">
      Children
    </Link>
    <Link className="tab-item" to="/cart">
      Brand
    </Link>
    <Link className="tab-item" to="/cart">
      New
    </Link>
    <Link className="tab-item" to="/cart">
      Popular
    </Link>
    <Search />
    <Link className="tab-item" to="/cart">
      About
    </Link>
    <Link className="tab-item" to="/cart">
      FAQs
    </Link>
  </SubNavbarWrapper>
);

export default SubNavbar;
