import React from 'react';
import styled from 'styled-components';
import { Card, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = styled.section`
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const FeaturedSection = styled.section`
  padding: 4rem 0;
  
  h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled(Card)`
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  .ant-card-cover {
    height: 200px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`;

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Sample products data with real images from Unsplash
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Premium wireless headphones with noise cancellation'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Latest smart watch with health monitoring'
    },
    {
      id: 3,
      name: 'Camera Lens',
      price: 599.99,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Professional camera lens for stunning photos'
    },
    {
      id: 4,
      name: 'Gaming Mouse',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'High-precision gaming mouse with RGB lighting'
    },
    {
      id: 5,
      name: 'Mechanical Keyboard',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Mechanical keyboard with customizable keys'
    },
    {
      id: 6,
      name: 'Bluetooth Speaker',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Portable Bluetooth speaker with great sound'
    }
  ];

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.stopPropagation(); // Prevent card click when clicking the button
    dispatch(addToCart({
      ...product,
      quantity: 1
    }));
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <HeroSection>
        <div>
          <h1>Welcome to ShopEase</h1>
          <p>Discover amazing products at unbeatable prices</p>
          <Button type="primary" size="large">Shop Now</Button>
        </div>
      </HeroSection>
      
      <FeaturedSection>
        <h2>Featured Products</h2>
        <ProductGrid>
          {products.map(product => (
            <ProductCard
              key={product.id}
              hoverable
              cover={<img alt={product.name} src={product.image} />}
              onClick={() => handleProductClick(product.id)}
            >
              <Card.Meta
                title={product.name}
                description={
                  <>
                    <div>${product.price.toFixed(2)}</div>
                    <div>{product.description}</div>
                  </>
                }
              />
              <Button 
                type="primary" 
                icon={<ShoppingCartOutlined />}
                onClick={(e) => handleAddToCart(e, product)}
                style={{ marginTop: '1rem', width: '100%' }}
              >
                Add to Cart
              </Button>
            </ProductCard>
          ))}
        </ProductGrid>
      </FeaturedSection>
    </>
  );
};

export default HomePage;