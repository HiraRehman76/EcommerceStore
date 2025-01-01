import React from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price }) => (
  <div style={{ border: '1px solid #ddd', padding: '1rem', margin: '1rem', borderRadius: '5px' }}>
    <h3>{name}</h3>
    <p>Price: ${price.toFixed(2)}</p>
    <button>Add to Cart</button>
  </div>
);

export default ProductCard;
