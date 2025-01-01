import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { primaryHeadingColor } from '../utilis/utilisStyle';
import CircularIcon from './CircularIcon';

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f8f8f8;
  .logo-navbar-link {
    display: flex;
    align-items: center;
    color: ${primaryHeadingColor};
    text-decoration: none;
    font-weight: 700;
    .logo-navbar {
      margin-right: 10px;
      height: 20px;
      width: 20px;
    }
  }
  .right-side-navbar {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const Navbar: React.FC = () => (
  <NavbarWrapper>
    <div className='left-side-navbar'>
      <CircularIcon
        chilldren={<img src='menu.png' alt='cart-icon' />}
      />
      </div>
    <Link to="/" className='logo-navbar-link'>
      <img src='store.png' alt='store-logo' className='logo-navbar'/>
      E-Commerce Store
    </Link>
    <div className='right-side-navbar'>
      <CircularIcon
        chilldren={<img src='favorite.png' alt='cart-icon' />}
      />
      <CircularIcon
        chilldren={<img src='cart.png' alt='cart-icon' />}
      />
      <CircularIcon
        chilldren={<img src='user.png' alt='cart-icon' />}
      />
      </div>
  </NavbarWrapper>
);

export default Navbar;
