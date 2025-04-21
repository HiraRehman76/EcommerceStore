import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const categories = [
    { name: 'New Arrivals', path: '/categories/new-arrivals' },
    { name: 'Men', path: '/categories/men' },
    { name: 'Women', path: '/categories/women' },
    { name: 'Electronics', path: '/categories/electronics' },
    { name: 'Home & Living', path: '/categories/home-living' },
    { name: 'Sale', path: '/categories/sale' }
  ];

  return (
    <SubNav>
      <SubNavContainer>
        {categories.map((category) => (
          <SubNavItem 
            key={category.path}
            onClick={() => navigate(category.path)}
          >
            {category.name}
          </SubNavItem>
        ))}
      </SubNavContainer>
    </SubNav>
  );
};

export default SubNavbar;