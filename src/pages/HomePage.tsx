import React from 'react';
import ProductCard from '../components/ProductCard';
import Heading from '../components/Heading';
import SupportedBrandComponent from '../components/SupportedBrandComponent';
import { Col, Row } from 'antd';

const placeholderProducts = [
  { id: 1, name: 'Product 1', price: 19.99 },
  { id: 2, name: 'Product 2', price: 29.99 },
  { id: 3, name: 'Product 3', price: 39.99 },
];

const supportedPartner = [
  { id: 1, name: 'nikeTraansparent.png' },
  { id: 2, name: 'ETSY-tranparent.png' },
  { id: 3, name: 'reebok-transparent.png' },
  { id: 4, name: 'puma-transparent.png' },
];

const HomePage: React.FC = () => (
  <div>
    <Heading text='We Supported By' />
    <Row gutter={[24, 24]}>
      {supportedPartner.map(product => (
      <Col span={4}>
        <SupportedBrandComponent chilldren={<img src={product.name} alt='cart-icon' />} />
      </Col>
      ))}
    </Row>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {placeholderProducts.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  </div>
);

export default HomePage;
