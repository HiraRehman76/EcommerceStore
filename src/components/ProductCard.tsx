import React from 'react';
import styled from 'styled-components';
import CircularIcon from './CircularIcon';


const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  position: relative;
  background-color: #F3F3F3;
  padding: 16px;
  border-radius: 16px;
  height: 257px;
  .product-header {
    padding: 16px;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 32px);
    .left-side-header {
      .product-name {
        margin: 0;
      }
      .product-price {
        margin: 0;
      }
    }
    .right-side-header {
      display: flex;
      align-items: center;
      .circular-icon-wrapper {
        &:first-child {
          margin-right: 8px;
        }
      }
    }
  }
  .product-image {
    height: 60%;
  }
`;

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string; 
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image }) => (
  <StyleWrapper className='product-card-style-wrapper' key={id}>
    <div className='product-header'>
      <div className='left-side-header'>
        <h4 className='product-name'>{name}</h4>
        <p className='product-price'>{price}</p>
      </div>
      <div className='right-side-header'>
        <CircularIcon chilldren={<img src='favorite.png' alt='cart-icon' />}/>
        <CircularIcon chilldren={<img src='cart.png' alt='cart-icon' />}/>
      </div>
    </div>
    <img src={image} alt='cart-icon' className='product-image' />
  </StyleWrapper>
);

export default ProductCard;
