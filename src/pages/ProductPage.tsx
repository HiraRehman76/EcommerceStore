import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, InputNumber, Rate, Tabs, message } from 'antd';
import { ShoppingCartOutlined, HeartOutlined, ShareAltOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductContainer = styled.div`
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageGallery = styled.div`
  .main-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  
  .thumbnail-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    
    img {
      width: 100%;
      height: 100px;
      object-fit: cover;
      border-radius: 4px;
      cursor: pointer;
      transition: opacity 0.3s ease;
      
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

const ProductInfo = styled.div`
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .price {
    font-size: 1.5rem;
    color: #1890ff;
    margin-bottom: 1rem;
  }
  
  .rating {
    margin-bottom: 1rem;
  }
  
  .description {
    color: #666;
    margin-bottom: 2rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  button {
    flex: 1;
  }
`;

const StyledTabs = styled(Tabs)`
  margin-top: 2rem;
  
  .ant-tabs-nav {
    margin-bottom: 2rem;
  }
`;

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Sample product data - in a real app, this would come from an API
  const product = {
    id: Number(id),
    name: 'Wireless Headphones',
    price: 199.99,
    rating: 4.5,
    description: 'Premium wireless headphones with noise cancellation technology. Experience crystal clear sound and comfort for hours of listening pleasure.',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    ],
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Bluetooth 5.0',
      'Built-in microphone',
      'Foldable design'
    ],
    specifications: {
      'Brand': 'AudioPro',
      'Model': 'AP-2000',
      'Color': 'Black',
      'Connectivity': 'Bluetooth 5.0',
      'Battery Life': '30 hours',
      'Charging Time': '2 hours'
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({
      ...product,
      quantity
    }));
    message.success('Product added to cart');
  };

  const items = [
    {
      key: '1',
      label: 'Description',
      children: <p>{product.description}</p>,
    },
    {
      key: '2',
      label: 'Features',
      children: (
        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      ),
    },
    {
      key: '3',
      label: 'Specifications',
      children: (
        <table style={{ width: '100%' }}>
          <tbody>
            {Object.entries(product.specifications).map(([key, value]) => (
              <tr key={key}>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>{key}</td>
                <td style={{ padding: '8px' }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ),
    },
  ];

  return (
    <ProductContainer>
      <ProductGrid>
        <ImageGallery>
          <img 
            src={product.images[selectedImage]} 
            alt={product.name} 
            className="main-image"
          />
          <div className="thumbnail-grid">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                onClick={() => setSelectedImage(index)}
                style={{ border: selectedImage === index ? '2px solid #1890ff' : 'none' }}
              />
            ))}
          </div>
        </ImageGallery>
        
        <ProductInfo>
          <h1>{product.name}</h1>
          <div className="price">${product.price.toFixed(2)}</div>
          <div className="rating">
            <Rate allowHalf defaultValue={product.rating} disabled />
            <span style={{ marginLeft: '1rem' }}>{product.rating} (120 reviews)</span>
          </div>
          <div className="description">
            {product.description}
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <span style={{ marginRight: '1rem' }}>Quantity:</span>
            <InputNumber
              min={1}
              max={10}
              value={quantity}
              onChange={(value) => value !== null && setQuantity(value)}
            />
          </div>
          
          <ActionButtons>
            <Button 
              type="primary" 
              size="large"
              icon={<ShoppingCartOutlined />}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <Button 
              size="large"
              icon={<HeartOutlined />}
            >
              Add to Wishlist
            </Button>
            <Button 
              size="large"
              icon={<ShareAltOutlined />}
            >
              Share
            </Button>
          </ActionButtons>
        </ProductInfo>
      </ProductGrid>
      
      <StyledTabs defaultActiveKey="1" items={items} />
    </ProductContainer>
  );
};

export default ProductPage; 