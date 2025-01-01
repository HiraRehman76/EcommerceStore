import React from 'react';
import styled from 'styled-components';


const StyleWrapper = styled.div``;

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price }) => (
  <StyleWrapper style={{ border: '1px solid #ddd', padding: '1rem', margin: '1rem', borderRadius: '5px' }}>
    <h3>{name}</h3>
    <p>Price: ${price.toFixed(2)}</p>
    <button>Add to Cart</button>
  </StyleWrapper>
);

export default ProductCard;
