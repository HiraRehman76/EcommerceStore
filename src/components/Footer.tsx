import React from 'react';
import styled from 'styled-components';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const FooterContainer = styled.footer`
  background: #2d3436;
  color: white;
  padding: 3rem 0;
  margin-top: 3rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterColumn = styled.div`
  h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  ul {
    list-style: none;
    
    li {
      margin-bottom: 0.5rem;
      cursor: pointer;
      transition: color 0.3s ease;
      
      &:hover {
        color: #0984e3;
      }
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  svg {
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s ease;
    
    &:hover {
      color: #0984e3;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <h3>ShopEase</h3>
          <p>Your one-stop shop for all your needs. Quality products at affordable prices.</p>
          <SocialIcons>
            <FacebookOutlined />
            <TwitterOutlined />
            <InstagramOutlined />
          </SocialIcons>
        </FooterColumn>
        <FooterColumn>
          <h3>Shop</h3>
          <ul>
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Sale</li>
            <li>Gift Cards</li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h3>Help</h3>
          <ul>
            <li>Contact Us</li>
            <li>Shipping Info</li>
            <li>Returns</li>
            <li>FAQ</li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates and offers.</p>
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </FooterColumn>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;