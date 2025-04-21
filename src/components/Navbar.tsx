import React from 'react';
import styled from 'styled-components';
import { ShoppingCartOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';

const Nav = styled.nav`
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3436;
  cursor: pointer;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #0984e3;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #f1f2f6;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  width: 300px;
  
  input {
    border: none;
    background: transparent;
    outline: none;
    width: 100%;
    padding: 0.5rem;
  }
`;

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Nav>
      <NavContainer>
        <Logo onClick={() => navigate('/')}>ShopEase</Logo>
        <SearchBar>
          <SearchOutlined style={{ color: '#636e72' }} />
          <input type="text" placeholder="Search products..." />
        </SearchBar>
        <NavItems>
          <NavItem onClick={() => navigate('/account')}>
            <UserOutlined />
            <span>Account</span>
          </NavItem>
          <NavItem onClick={() => navigate('/cart')}>
            <Badge count={totalItems} showZero>
              <ShoppingCartOutlined style={{ fontSize: '1.2rem' }} />
            </Badge>
            <span>Cart</span>
          </NavItem>
        </NavItems>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;