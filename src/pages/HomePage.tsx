import React from 'react';
import ProductCard from '../components/ProductCard';
import Heading from '../components/Heading';
import SupportedBrandComponent from '../components/SupportedBrandComponent';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import RadioButtonText from '../components/RadioButtonText';
import FeatureComponent from '../components/FeatureComponent';
import CatelogueComponent from '../components/CatelogueComponent';

const placeholderProducts = [
  { id: 1, name: 'Hobo Small', price: '$195.00 CAD', image:'bag1.png' },
  { id: 2, name: 'Hobo Small', price: '$195.00 CAD', image:'bag2.jpeg' },
  { id: 3, name: 'Hobo Small', price: '$195.00 CAD', image:'bag3.jpeg' },
  { id: 4, name: 'Hobo Small', price: '$195.00 CAD', image:'bag4.jpeg' },
  { id: 5, name: 'Hobo Small', price: '$195.00 CAD', image:'bag5.jpeg' },
  { id: 6, name: 'Hobo Small', price: '$195.00 CAD', image:'bag6.jpeg' },
  { id: 7, name: 'Hobo Small', price: '$195.00 CAD', image:'bag7.jpeg' },
  { id: 8, name: 'Hobo Small', price: '$195.00 CAD', image:'bag8.jpeg' },
];

const supportedPartner = [
  { id: 1, name: 'nikeTraansparent.png' },
  { id: 2, name: 'ETSY-tranparent.png' },
  { id: 3, name: 'reebok-transparent.png' },
  { id: 4, name: 'puma-transparent.png' },
];

const featureSupported = [
  { id: 1, hText: 'Express Delivery', pText:'DHL Express delivery worldwidde from our bag company', icon:'express.png' },
  { id: 2, hText: 'Payement in 3x', pText:'DHL Express delivery worldwidde from our bag company', icon:'payment.png' },
  { id: 3, hText: 'Free Returns', pText:'DHL Express delivery worldwidde from our bag company', icon:'return.png' },
];

const catelougeComponent = [
  { id: 1, hText: 'Modern Qualitty & Mind Refreshing Color Bag', link:'', icon:'bagwithbackground.jpg' },
  { id: 2, hText: 'Latest Fashion & Beauty Leather Bag For You!', link:'', icon:'bagwithbackground2.jpg' },
];

const ProductWrapper =styled(Row)``;

const HomePage: React.FC = () => (
  <div>
    <Heading text='We Supported By' />
    <Row gutter={[24, 24]}>
      {supportedPartner.map(product => (
      <Col span={6}>
        <SupportedBrandComponent chilldren={<img src={product.name} alt='cart-icon' />} />
      </Col>
      ))}
    </Row>
      <div className='radio-button-bar'>
        <RadioButtonText buttonText="All Collections" />
        <RadioButtonText buttonText="New Collections" />
        <RadioButtonText buttonText="Popular Collections" />
      </div>
    <ProductWrapper gutter={[24, 24]}>
      {placeholderProducts.map(product => (
        <Col span={6}>
          <ProductCard key={product.id} {...product} />
        </Col>
      ))}
    </ProductWrapper>
    <Heading text='We Supported By' />
    <Row gutter={[24, 24]}>
      {featureSupported.map((feature) => (
        <Col span={8}>
          <FeatureComponent hText={feature.hText} pText={feature.pText} icon={feature.icon} />
        </Col>
      ))}
    </Row>
    <Row gutter={[24, 24]} style={{marginTop : '16px'}}>
      {catelougeComponent.map((catelogue) => (
        <Col span={12}>
          <CatelogueComponent hText={catelogue.hText} link={catelogue.link} icon={catelogue.icon} />
        </Col>
      ))}
    </Row>
  </div>
);

export default HomePage;
