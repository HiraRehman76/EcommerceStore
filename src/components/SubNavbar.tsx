import React from 'react';
import styled from 'styled-components';

const SubNav = styled.nav`
  background: #2d3436;
  padding: 0.5rem 0;
`;

const SubNavContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const SubNavItem = styled.div`
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
  
  &:hover {
    background: #0984e3;
  }
`;

const SubNavbar: React.FC = () => {
  return (
    <SubNav>
      <SubNavContainer>
        <SubNavItem>New Arrivals</SubNavItem>
        <SubNavItem>Men</SubNavItem>
        <SubNavItem>Women</SubNavItem>
        <SubNavItem>Electronics</SubNavItem>
        <SubNavItem>Home & Living</SubNavItem>
        <SubNavItem>Sale</SubNavItem>
      </SubNavContainer>
    </SubNav>
  );
};

export default SubNavbar;