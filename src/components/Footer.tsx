import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background-color: #f8f8f8;
  text-align: center;
  padding: 1rem 0;
`;

const Footer = ()=> {
  return (
    <FooterWrapper>
      <p>© 2025 E-Commerce Store</p>
    </FooterWrapper>
  );
}

export default Footer;
