import React from 'react';
import ProductCard from '../components/ProductCard';

const placeholderProducts = [
  { id: 1, name: 'Product 1', price: 19.99 },
  { id: 2, name: 'Product 2', price: 29.99 },
  { id: 3, name: 'Product 3', price: 39.99 },
];

const HomePage: React.FC = () => (
  <div>
    <h1>Welcome to E-Commerce Store</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {placeholderProducts.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  </div>
);

export default HomePage;
